import OaAssistantSvg from "@/components/svg/oaAssistant";
import ElectronicOrderSvg from "@/components/svg/electronicOrder";
import ElectronicManifestSvg from "@/components/svg/electronicManifest";
import ElectronicSignatureSvg from "@/components/svg/electronicSignature";
import AgentSvg from "@/components/svg/agent";

export const data = [
    {
        id: 1,
        title: '飞度OA助手',
        icon: <OaAssistantSvg />,
        info: '注：飞度oa助手已经包含了飞度电子订单套餐和电子货单套餐哦',
        content: [
            {
                subTitle: '采购管理',
                subContent: '采购订单、采购货单、退货单、排期通知单、物料清单、申购单'
            },
            {
                subTitle: '销售管理',
                subContent: '销售订单、销售货单、销售帐单、报价单、商品清单、制造工单'
            },
            {
                subTitle: '财务管理',
                subContent: '收据、应收账单、应付账单、报销单、工资单'
            },
            {
                subTitle: '电子订单套餐',
                subContent: '采购订单、物料清单'
            },
            {
                subTitle: '电子货单套餐',
                subContent: '销售订单、商品清单、对账单、退货单'
            }
        ]
    },
    {
        id: 2,
        title: '电子订单套餐',
        icon: <ElectronicOrderSvg />,
        info: '注：飞度oa助手已经包含了飞度电子订单套餐和电子货单套餐哦',
        content: '采购订单、物料清单'
    },
    {
        id: 3,
        title: '电子货单套餐',
        icon: <ElectronicManifestSvg />,
        info: '注：飞度oa助手已经包含了飞度电子订单套餐和电子货单套餐哦',
        content: '销售订单、商品清单、对账单、退货单'
    },
    {
        id: 4,
        title: 'CA电子签',
        icon: <ElectronicSignatureSvg />,
        content: '采购订单、送货单、报价单、采购协议、辞职书、收据……'
    },
    {
        id: 5,
        title: '代理商应用系统',
        icon: <AgentSvg />,
        content: '想要兼职赚取高额佣金，快来加入我们吧！'
    },
]