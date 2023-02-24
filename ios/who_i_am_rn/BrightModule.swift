import Foundation
import UIKit

@objc(BrightModule)
class BrightModule : NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable: Any]! {
    return [
      "STRING_VALUE": "Hello Swift",
      "NUMBER_VALUE": 99
    ]
  }
  
  @objc
  func getBright(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    resolve(UIScreen.main.brightness)
  }
  
  @objc
  func setBright(_ bright : CGFloat) {
    print("Setting brightness to \(bright)")
    DispatchQueue.main.async {
      UIScreen.main.brightness = bright
    }
  
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
