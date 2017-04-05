//
//  MyModuleViewController.m
//  manager
//
//  Created by 余泽锋 on 2017/4/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyModuleViewController, NSObject)
  RCT_EXTERN_METHOD(sayHi:(NSString)msg callback:(RCTResponseSenderBlock)callback)
@end
