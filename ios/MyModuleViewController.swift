//
//  MyModuleViewController.swift
//  manager
//
//  Created by 余泽锋 on 2017/4/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

import UIKit

@objc(MyModuleViewController)
class MyModuleViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
extension MyModuleViewController {
  @objc func sayHi(msg:String!, callback: RCTResponseSenderBlock) -> Void {
    callback(["Swift Module recieved your message, content is \"\(msg)\""]);
  }
}
