/**
 * api
 * @type {object}
 */

export default {
    //获取派出所
    getPCS: {
        name: '获取派出所列表',
        method: 'getPCS',
        //PCS_AreaID=3 现只有一个区域，固定id=3
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3',
        // productionUrl: 'http://192.168.1.99:8235/Handler/AjaxTestHandler.ashx?mod=40&&PCS_AreaID=3'
    },
    actionSwtich: {
        name: '下发开关控制',
        method: 'GetConn',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?',
        productionUrl: ''
    },
    getWorkSiteById: {
        name: '通过地区id获取所有设备信息',
        method: 'getWorkSiteById',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=41&&WS_SysCode=',
        productionUrl: ''
    },
    getWorkSiteAll: {
        name: '获取所有设备列表',
        method: 'getWorkSite',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=2',
        productionUrl: ''
    },

    getWorkSiteInfoById: {
        name: '获取设备信息',
        method: 'GetWorkSiteInformation',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=3&&Ws_code=',
        productionUrl: ''
    },
    getSwitchStateById: {
        name: '获取开关列表状态',
        method: 'GetWorkSiteState',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=4&&Ws_code=',
        productionUrl: ''
    },

    addOrUpdateWorkSite: {
        name: '添加或修改设备',
        method: 'RunWorkSite',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=30',
        productionUrl: ''
    },

    getUserInfoAll: {
        name: '获取所有人员信息',
        method: 'GetUser',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=43',
        productionUrl: ''
    },

    addOrUpdateUser: {
        name: '新增或修改人员',
        method: 'RunUser',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=32',
        productionUrl: ''
    },

    delUserInfo: {
        name: '删除人员信息',
        method: 'DeleteUser',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=34',
        productionUrl: ''
    },

    getCompany: {
        name: '获取维保单位列表',
        method: 'GetCompany',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=42',
        productionUrl: ''
    },

    delCompany: {
        name: '删除维保单位',
        method: 'DeleteCompany',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=33',
        productionUrl: ''
    },
    addOrUpdateCompany: {
        name: '新增或修改功维保单位',
        method: 'RunCompany',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=31',
        productionUrl: ''
    },


    getSXJCompanyAll: {
        name: '获取摄像机品牌列表',
        method: 'getSXJCompany',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=45',
        productionUrl: ''
    },

    addOrUpdateCameraCompany: {
        name: '新增或修改摄像机公司',
        method: 'RunC_SXJCompany',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=44',
        productionUrl: ''
    },
    //获取摄像机列表，接口支持 sql where
    getCameraAll: {
        name: '获取摄像机列表',
        method: 'GetC_SXJ',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=47',
        productionUrl: ''
    },
    addOrUpdateCamera: {
        name: '新增或修改摄像机',
        method: 'RunC_SXJ',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=46',
        productionUrl: ''
    },

    addOrUpdateEquipSwitchState: {
        name: '添加或修改设备开关状态',
        method: 'RunC_WSon_off',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=48',
        productionUrl: ''
    },
    getEquipSwitchStateConfigList: {
        name: '获取设备开关设置状态列表',
        method: 'GetC_WSon_off',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=49',
        productionUrl: ''
    },

    getDnReprotMonth: {
        name: '获取电能月报',
        method: 'GetDNOneYearRow',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=12',
        productionUrl: ''
    },

    getDNoneToone: {
        name: '获取指定监控箱一段时间内的电能统计',
        method: 'GetDNoneToone',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=10',
        productionUrl: ''
    },

    getDNoneToonePCS: {
        name: '获取电能详情/派出所',
        method: 'GetDNoneToonePCS',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=16',
        productionUrl: ''
    },
    getDNoneToonePCSSUM: {
        name: '获取电能详情/区域(江岸区)',
        method: 'GetDNoneToonePCSSUM',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=17',
        productionUrl: ''
    },
    getALARMCountPCS: {
        name: '获取指定派出所下监控箱告警状态每位统计数量',
        method: 'GetALARMCountPCS',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=6',
        productionUrl: ''
    },
    getALARMCountPCSJKX: {
        name: '获取指定派出所下监控箱指定位的告警详情',
        method: 'GetALARMCountPCSJKX',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=13',
        productionUrl: ''
    },
    getWSAlarm: {
        name: '获取某一个设备的告警信息',
        method: 'GetWSAlarm',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=7',
        productionUrl: ''
    },
    getWSAlarmCount: {
        name: '获取设备的告警数量',
        method: 'getWsAlarmCount',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=5'
    },
    getPcsAlarmCount: {
        name: '获取指定派出所下监控箱告警状态每位统计数量',
        method: 'GetALARMCountPCS',
        devUrl: 'api/Handler/AjaxTestHandler.ashx?mod=6'
    },
    getALARMCountArea: {
        name: '获取全区监控箱告警状态每位统计数量',
        method: 'GetALARMCountArea',
        devUrl: 'api/Handler/AjaxTestHandler.ashx'
    }
}   