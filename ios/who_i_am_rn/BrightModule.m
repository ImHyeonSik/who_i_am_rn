#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BrightModule, NSObject)
  RCT_EXTERN_METHOD(
                    getBright : (RCTPromiseResolveBlock)resolve
                    rejecter : (RCTPromiseRejectBlock)reject
  )
  RCT_EXTERN_METHOD(setBright: (CGFloat)bright)
@end

