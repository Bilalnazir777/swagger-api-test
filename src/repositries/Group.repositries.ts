import { group } from 'console';
import { GROUPSchema } from '../model/Group.model';
import { IGROUP } from '../types/document/IGROUP';
import { IcheckmesagesReq } from '../types/Request/Group.Request'




export class MainGroup {
  constructor() { }

  getgroup(_id: string) {
    return GROUPSchema.findById(_id).populate('messages', 'members')
  }
  creategroup(group: IGROUP) {
    return new GROUPSchema(group).save()
  }
  deletegroup(_id: string) {
    return GROUPSchema.findByIdAndDelete(_id);
  }
  addusertogroup(group: any) {
    console.log(group)
    return GROUPSchema.findByIdAndUpdate(
      group.groupid,
      {
        '$push': { members: { _id: group.userid } },
      },
      {
        new: true
      }
    )
  }
  updategroupmessages(group: any) {
    return GROUPSchema.findByIdAndUpdate(
      group.groupid,
      { messagearray: group.messageid },
      {
        new: true,
      }
    ).populate('message');
  }
  
}

