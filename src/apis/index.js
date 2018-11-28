/**
 * api
 * @type {object}
 */

 export default{
    //获取派出所
    getPCS:{
        name:'获取派出所列表',
        method:'getPCS',
        //PCS_AreaID=3 现只有一个区域，固定id=3
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3',
        productionUrl:''
    },
    getWorkSiteById:{
        name:'通过地区id获取所有设备信息',
        method:'getWorkSiteById',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=41&&WS_SysCode=',
        productionUrl:''
    },
    getWorkSiteAll:{
        name:'获取所有设备列表',
        method:'getWorkSite',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=2',
        productionUrl:''
    },

    addOrUpdateWorkSite:{
        name:'添加或修改设备',
        method:'RunWorkSite',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=30',
        productionUrl:''
    },

    getUserInfoAll:{
        name:'获取所有人员信息',
        method:'GetUser',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=43',
        productionUrl:''
    },

    addOrUpdateUser:{
        name:'新增或修改人员',
        method:'RunUser',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=32',
        productionUrl:''
    },

    delUserInfo:{
        name:'删除人员信息',
        method:'DeleteUser',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=34',
        productionUrl:''
    },
    
    getCompany:{
        name:'获取维保单位列表',
        method:'GetCompany',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=42',
        productionUrl:''
    },

    delCompany:{
        name:'删除维保单位',
        method:'DeleteCompany',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=33',
        productionUrl:''
    },
    addOrUpdateCompany:{
        name:'新增或修改功维保单位',
        method:'RunCompany',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=31',
        productionUrl:''
    },

    getWorkSiteInfoById:{
        name:'获取设备信息',
        method:'GetWorkSiteInformation',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=3&&Ws_code=',
        productionUrl:''
    },
    getSwitchStateById:{
        name:'获取开关列表状态',
        method:'GetWorkSiteState',
        devUrl:'api/Handler/AjaxTestHandler.ashx?mod=4&&Ws_code=',
        productionUrl:''
    }
    
 }