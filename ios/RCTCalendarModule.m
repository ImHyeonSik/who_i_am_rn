//
//  RCTCalendarModule.m
//  who_i_am_rn
//
//  Created by hyeonsik on 2023/02/12.
//

#import "RCTCalendarModule.h"
#import <React/RCTLog.h>


@implementation RCTCalendarModule

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
// NSInteger eventId = createCalendarEvent();
// if (eventId) {
//    resolve(@(eventId));
  resolve(title);
//  } else {
//    reject(@"event_failure", @"no event id returned", nil);
//  }
}


@end

