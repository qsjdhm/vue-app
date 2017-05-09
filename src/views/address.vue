<template>
    <div class="address-page">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">indexed list（索引列表）</h1>
        </header>
        <div class="mui-content">
            <div id='list' class="mui-indexed-list">
                <div class="mui-indexed-list-search mui-input-row mui-search">
                    <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索机场">
                </div>
                <div class="mui-indexed-list-bar">
                    <a>A</a>
                    <a>B</a>
                    <a>C</a>
                    <a>D</a>
                    <a>E</a>
                    <a>F</a>
                    <a>G</a>
                    <a>H</a>
                    <a>I</a>
                    <a>J</a>
                    <a>K</a>
                    <a>L</a>
                    <a>M</a>
                    <a>N</a>
                    <a>O</a>
                    <a>P</a>
                    <a>Q</a>
                    <a>R</a>
                    <a>S</a>
                    <a>T</a>
                    <a>U</a>
                    <a>V</a>
                    <a>W</a>
                    <a>X</a>
                    <a>Y</a>
                    <a>Z</a>
                </div>
                <div class="mui-indexed-list-alert"></div>
                <div class="mui-indexed-list-inner">
                    <div class="mui-indexed-list-empty-alert">没有数据</div>
                    <ul id="address_list" class="mui-table-view">
                        <li v-for="(item, key) in list"
                            :key="key"
                            :data-group="item.value"

                            class="mui-table-view-divider mui-indexed-list-group">{{item.value}}</li>




                        <!--<li data-group="A" class="mui-table-view-divider mui-indexed-list-group">A</li>
                        <li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item"><div>阿克苏机场</div></li>
                        <li data-value="BPL" data-tags="ALaShanKou" class="mui-table-view-cell mui-indexed-list-item"><div>阿拉山口机场</div></li>
                        <li data-value="AAT" data-tags="ALeTai" class="mui-table-view-cell mui-indexed-list-item"><div>阿勒泰机场</div></li>
                        <li data-value="NGQ" data-tags="ALiKunSha" class="mui-table-view-cell mui-indexed-list-item"><div>阿里昆莎机场</div></li>
                        <li data-value="AQG" data-tags="AnQingTianZhuShan" class="mui-table-view-cell mui-indexed-list-item"><div>安庆天柱山机场</div></li>
                        <li data-value="MFM" data-tags="AoMenGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>澳门国际机场</div></li>
                        <li data-group="B" class="mui-table-view-divider mui-indexed-list-group">B</li>
                        <li data-value="BSD" data-tags="BaoShan" class="mui-table-view-cell mui-indexed-list-item"><div>保山机场</div></li>
                        <li data-value="BAV" data-tags="BaoTou" class="mui-table-view-cell mui-indexed-list-item"><div>包头机场</div></li>
                        <li data-value="BHY" data-tags="BeiHaiFuCheng" class="mui-table-view-cell mui-indexed-list-item"><div>北海福成机场</div></li>
                        <li data-value="NAY" data-tags="BeiJingNanYuan" class="mui-table-view-cell mui-indexed-list-item"><div>北京南苑机场</div></li>
                        <li data-value="PEK" data-tags="BeiJingShouDuGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>北京首都国际机场</div></li>
                        <li data-group="C" class="mui-table-view-divider mui-indexed-list-group">C</li>
                        <li data-value="NBS" data-tags="ChangBaiShan" class="mui-table-view-cell mui-indexed-list-item"><div>长白山机场</div></li>
                        <li data-value="CGQ" data-tags="ChangChunLongJiaGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>长春龙嘉国际机场</div></li>
                        <li data-value="CGD" data-tags="ChangDeTaoHuaYuan" class="mui-table-view-cell mui-indexed-list-item"><div>常德桃花源机场</div></li>
                        <li data-value="BPX" data-tags="ChangDuBangDa" class="mui-table-view-cell mui-indexed-list-item"><div>昌都邦达机场</div></li>
                        <li data-value="CSX" data-tags="ChangShaHuangHuaGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>长沙黄花国际机场</div></li>
                        <li data-value="CIH" data-tags="ChangZhiWangCun" class="mui-table-view-cell mui-indexed-list-item"><div>长治王村机场</div></li>
                        <li data-value="CZX" data-tags="ChangZhouBenNiu" class="mui-table-view-cell mui-indexed-list-item"><div>常州奔牛机场</div></li>
                        <li data-value="CTU" data-tags="ChengDuShuangLiuGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>成都双流国际机场</div></li>
                        <li data-value="CIF" data-tags="ChiFeng" class="mui-table-view-cell mui-indexed-list-item"><div>赤峰机场</div></li>
                        <li data-group="D" class="mui-table-view-divider mui-indexed-list-group">D</li>
                        <li data-value="DLU" data-tags="DaLi" class="mui-table-view-cell mui-indexed-list-item"><div>大理机场</div></li>
                        <li data-value="DLC" data-tags="DaLianZhouShuiZiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>大连周水子国际机场</div></li>
                        <li data-value="DQA" data-tags="DaQingSaErTu" class="mui-table-view-cell mui-indexed-list-item"><div>大庆萨尔图机场</div></li>
                        <li data-value="DAT" data-tags="DaTongDongWangZhuang" class="mui-table-view-cell mui-indexed-list-item"><div>大同东王庄机场</div></li>
                        <li data-value="DAX" data-tags="DaZhouHeShi" class="mui-table-view-cell mui-indexed-list-item"><div>达州河市机场</div></li>
                        <li data-value="DDG" data-tags="DanDongLangTou" class="mui-table-view-cell mui-indexed-list-item"><div>丹东浪头机场</div></li>
                        <li data-value="LUM" data-tags="DeHongMangShi" class="mui-table-view-cell mui-indexed-list-item"><div>德宏芒市机场</div></li>
                        <li data-value="DIG" data-tags="DiQingXiangGeLiLa" class="mui-table-view-cell mui-indexed-list-item"><div>迪庆香格里拉机场</div></li>
                        <li data-value="DOY" data-tags="DongYing" class="mui-table-view-cell mui-indexed-list-item"><div>东营机场</div></li>
                        <li data-value="DNH" data-tags="DunHuang" class="mui-table-view-cell mui-indexed-list-item"><div>敦煌机场</div></li>
                        <li data-group="E" class="mui-table-view-divider mui-indexed-list-group">E</li>
                        <li data-value="DSN" data-tags="EErDuoSi" class="mui-table-view-cell mui-indexed-list-item"><div>鄂尔多斯机场</div></li>
                        <li data-value="ENH" data-tags="EnShiXuJiaPing" class="mui-table-view-cell mui-indexed-list-item"><div>恩施许家坪机场</div></li>
                        <li data-value="ERL" data-tags="ErLianHaoTeSaiWuSuGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>二连浩特赛乌苏国际机场</div></li>
                        <li data-group="F" class="mui-table-view-divider mui-indexed-list-group">F</li>
                        <li data-value="FUG" data-tags="FuYangXiGuan" class="mui-table-view-cell mui-indexed-list-item"><div>阜阳西关机场</div></li>
                        <li data-value="FOC" data-tags="FuZhouChangLeGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>福州长乐国际机场</div></li>
                        <li data-group="G" class="mui-table-view-divider mui-indexed-list-group">G</li>
                        <li data-value="KOW" data-tags="GanZhouHuangJin" class="mui-table-view-cell mui-indexed-list-item"><div>赣州黄金机场</div></li>
                        <li data-value="GOQ" data-tags="GeErMu" class="mui-table-view-cell mui-indexed-list-item"><div>格尔木机场</div></li>
                        <li data-value="GYU" data-tags="GuYuanLiuPanShan" class="mui-table-view-cell mui-indexed-list-item"><div>固原六盘山机场</div></li>
                        <li data-value="GYS" data-tags="GuangYuanPanLong" class="mui-table-view-cell mui-indexed-list-item"><div>广元盘龙机场</div></li>
                        <li data-value="CAN" data-tags="GuangZhouBaiYunGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>广州白云国际机场</div></li>
                        <li data-value="KWL" data-tags="GuiLinLiangJiangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>桂林两江国际机场</div></li>
                        <li data-value="KWE" data-tags="GuiYangLongDongBaoGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>贵阳龙洞堡国际机场</div></li>
                        <li data-group="H" class="mui-table-view-divider mui-indexed-list-group">H</li>
                        <li data-value="HRB" data-tags="HaErBinTaiPingGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>哈尔滨太平国际机场</div></li>
                        <li data-value="HMI" data-tags="HaMi" class="mui-table-view-cell mui-indexed-list-item"><div>哈密机场</div></li>
                        <li data-value="HAK" data-tags="HaiKouMeiLanGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>海口美兰国际机场</div></li>
                        <li data-value="HLD" data-tags="HaiLaErDongShanGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>海拉尔东山国际机场</div></li>
                        <li data-value="HDG" data-tags="HanDan" class="mui-table-view-cell mui-indexed-list-item"><div>邯郸机场</div></li>
                        <li data-value="HZG" data-tags="HanZhong" class="mui-table-view-cell mui-indexed-list-item"><div>汉中机场</div></li>
                        <li data-value="HGH" data-tags="HangZhouXiaoShanGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>杭州萧山国际机场</div></li>
                        <li data-value="HFE" data-tags="HeFeiLuoGangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>合肥骆岗国际机场</div></li>
                        <li data-value="HTN" data-tags="HeTian" class="mui-table-view-cell mui-indexed-list-item"><div>和田机场</div></li>
                        <li data-value="HEK" data-tags="HeiHe" class="mui-table-view-cell mui-indexed-list-item"><div>黑河机场</div></li>
                        <li data-value="HET" data-tags="HuHeHaoTeBaiTaGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>呼和浩特白塔国际机场</div></li>
                        <li data-value="HIA" data-tags="HuaiAnLianShui" class="mui-table-view-cell mui-indexed-list-item"><div>淮安涟水机场</div></li>
                        <li data-value="TXN" data-tags="HuangShanTunXiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>黄山屯溪国际机场</div></li>
                        <li data-group="J" class="mui-table-view-divider mui-indexed-list-group">J</li>
                        <li data-value="TNA" data-tags="JiNanYaoQiangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>济南遥墙国际机场</div></li>
                        <li data-value="JNG" data-tags="JiNingQuFu" class="mui-table-view-cell mui-indexed-list-item"><div>济宁曲阜机场</div></li>
                        <li data-value="JXA" data-tags="JiXiXingKaiHu" class="mui-table-view-cell mui-indexed-list-item"><div>鸡西兴凯湖机场</div></li>
                        <li data-value="JMU" data-tags="JiaMuSiDongJiao" class="mui-table-view-cell mui-indexed-list-item"><div>佳木斯东郊机场</div></li>
                        <li data-value="JGN" data-tags="JiaYuGuan" class="mui-table-view-cell mui-indexed-list-item"><div>嘉峪关机场</div></li>
                        <li data-value="JNZ" data-tags="JinZhouXiaoLingZi" class="mui-table-view-cell mui-indexed-list-item"><div>锦州小岭子机场</div></li>
                        <li data-value="JDZ" data-tags="JingDeZhen" class="mui-table-view-cell mui-indexed-list-item"><div>景德镇机场</div></li>
                        <li data-value="JGS" data-tags="JingGangShan" class="mui-table-view-cell mui-indexed-list-item"><div>井冈山机场</div></li>
                        <li data-value="JIU" data-tags="JiuJiangLuShan" class="mui-table-view-cell mui-indexed-list-item"><div>九江庐山机场</div></li>
                        <li data-value="JZH" data-tags="JiuZhaiHuangLong" class="mui-table-view-cell mui-indexed-list-item"><div>九寨黄龙机场</div></li>
                        <li data-group="K" class="mui-table-view-divider mui-indexed-list-group">K</li>
                        <li data-value="KHG" data-tags="KaShi" class="mui-table-view-cell mui-indexed-list-item"><div>喀什机场</div></li>
                        <li data-value="KRY" data-tags="KeLaMaYi" class="mui-table-view-cell mui-indexed-list-item"><div>克拉玛依机场</div></li>
                        <li data-value="KCA" data-tags="KuCheGuiZi" class="mui-table-view-cell mui-indexed-list-item"><div>库车龟兹机场</div></li>
                        <li data-value="KRL" data-tags="KuErLe" class="mui-table-view-cell mui-indexed-list-item"><div>库尔勒机场</div></li>
                        <li data-value="KMG" data-tags="KunMingWuJiaBaGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>昆明巫家坝国际机场</div></li>
                        <li data-group="L" class="mui-table-view-divider mui-indexed-list-group">L</li>
                        <li data-value="LXA" data-tags="LaSaGongGa" class="mui-table-view-cell mui-indexed-list-item"><div>拉萨贡嘎机场</div></li>
                        <li data-value="LHW" data-tags="LanZhouZhongChuan" class="mui-table-view-cell mui-indexed-list-item"><div>兰州中川机场</div></li>
                        <li data-value="LJG" data-tags="LiJiangSanYi" class="mui-table-view-cell mui-indexed-list-item"><div>丽江三义机场</div></li>
                        <li data-value="HZH" data-tags="LiPing" class="mui-table-view-cell mui-indexed-list-item"><div>黎平机场</div></li>
                        <li data-value="LYG" data-tags="LianYunGangBaiTaBu" class="mui-table-view-cell mui-indexed-list-item"><div>连云港白塔埠机场</div></li>
                        <li data-value="LNJ" data-tags="LinCang" class="mui-table-view-cell mui-indexed-list-item"><div>临沧机场</div></li>
                        <li data-value="LYI" data-tags="LinYi" class="mui-table-view-cell mui-indexed-list-item"><div>临沂机场</div></li>
                        <li data-value="LZY" data-tags="LinZhiMiLin" class="mui-table-view-cell mui-indexed-list-item"><div>林芝米林机场</div></li>
                        <li data-value="LZH" data-tags="LiuZhouBaiLian" class="mui-table-view-cell mui-indexed-list-item"><div>柳州白莲机场</div></li>
                        <li data-value="LCX" data-tags="LongYanGuanZhiShan" class="mui-table-view-cell mui-indexed-list-item"><div>龙岩冠豸山机场</div></li>
                        <li data-value="LZO" data-tags="LuZhouLanTian" class="mui-table-view-cell mui-indexed-list-item"><div>泸州蓝田机场</div></li>
                        <li data-value="LYA" data-tags="LuoYangBeiJiao" class="mui-table-view-cell mui-indexed-list-item"><div>洛阳北郊机场</div></li>
                        <li data-group="M" class="mui-table-view-divider mui-indexed-list-group">M</li>
                        <li data-value="NZH" data-tags="ManZhouLiXiJiao" class="mui-table-view-cell mui-indexed-list-item"><div>满洲里西郊机场</div></li>
                        <li data-value="MIG" data-tags="MianYangNanJiao" class="mui-table-view-cell mui-indexed-list-item"><div>绵阳南郊机场</div></li>
                        <li data-value="OHE" data-tags="MoHeGuLian" class="mui-table-view-cell mui-indexed-list-item"><div>漠河古莲机场</div></li>
                        <li data-value="MDG" data-tags="MuDanJiangHaiLang" class="mui-table-view-cell mui-indexed-list-item"><div>牡丹江海浪机场</div></li>
                        <li data-group="N" class="mui-table-view-divider mui-indexed-list-group">N</li>
                        <li data-value="KHN" data-tags="NanChangChangBeiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>南昌昌北国际机场</div></li>
                        <li data-value="NAO" data-tags="NanChongGaoPing" class="mui-table-view-cell mui-indexed-list-item"><div>南充高坪机场</div></li>
                        <li data-value="NKG" data-tags="NanJingLuKouGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>南京禄口国际机场</div></li>
                        <li data-value="NNG" data-tags="NanNingWuXu" class="mui-table-view-cell mui-indexed-list-item"><div>南宁吴圩机场</div></li>
                        <li data-value="NTG" data-tags="NanTongXingDong" class="mui-table-view-cell mui-indexed-list-item"><div>南通兴东机场</div></li>
                        <li data-value="NNY" data-tags="NanYangJiangYing" class="mui-table-view-cell mui-indexed-list-item"><div>南阳姜营机场</div></li>
                        <li data-value="NGB" data-tags="NingBoLiSheGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>宁波栎社国际机场</div></li>
                        <li data-group="P" class="mui-table-view-divider mui-indexed-list-group">P</li>
                        <li data-value="SYM" data-tags="PuErSiMao" class="mui-table-view-cell mui-indexed-list-item"><div>普洱思茅机场</div></li>
                        <li data-group="Q" class="mui-table-view-divider mui-indexed-list-group">Q</li>
                        <li data-value="NDG" data-tags="QiQiHaErSanJiaZi" class="mui-table-view-cell mui-indexed-list-item"><div>齐齐哈尔三家子机场</div></li>
                        <li data-value="SHP" data-tags="QinHuangDaoShanHaiGuan" class="mui-table-view-cell mui-indexed-list-item"><div>秦皇岛山海关机场</div></li>
                        <li data-value="TAO" data-tags="QingDaoLiuTingGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>青岛流亭国际机场</div></li>
                        <li data-value="JUZ" data-tags="QuZhou" class="mui-table-view-cell mui-indexed-list-item"><div>衢州机场</div></li>
                        <li data-value="JJN" data-tags="QuanZhouJinJiang" class="mui-table-view-cell mui-indexed-list-item"><div>泉州晋江机场</div></li>
                        <li data-group="R" class="mui-table-view-divider mui-indexed-list-group">R</li>
                        <li data-value="RKZ" data-tags="RiKaZeHePing" class="mui-table-view-cell mui-indexed-list-item"><div>日喀则和平机场</div></li>
                        <li data-group="T" class="mui-table-view-divider mui-indexed-list-group">T</li>
                        <li data-value="TCG" data-tags="TaCheng" class="mui-table-view-cell mui-indexed-list-item"><div>塔城机场</div></li>
                        <li data-value="TYN" data-tags="TaiYuanWuSuGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>太原武宿国际机场</div></li>
                        <li data-value="HYN" data-tags="TaiZhouLuQiao" class="mui-table-view-cell mui-indexed-list-item"><div>台州路桥机场 (黄岩机场)</div></li>
                        <li data-value="TVS" data-tags="TangShanSanNvHe" class="mui-table-view-cell mui-indexed-list-item"><div>唐山三女河机场</div></li>
                        <li data-value="TCZ" data-tags="TengChongTuoFeng" class="mui-table-view-cell mui-indexed-list-item"><div>腾冲驼峰机场</div></li>
                        <li data-value="TSN" data-tags="TianJinBinHaiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>天津滨海国际机场</div></li>
                        <li data-value="TGO" data-tags="TongLiao" class="mui-table-view-cell mui-indexed-list-item"><div>通辽机场</div></li>
                        <li data-value="TEN" data-tags="TongRenFengHuang" class="mui-table-view-cell mui-indexed-list-item"><div>铜仁凤凰机场</div></li>
                        <li data-group="W" class="mui-table-view-divider mui-indexed-list-group">W</li>
                        <li data-value="WXN" data-tags="WanZhouWuQiao" class="mui-table-view-cell mui-indexed-list-item"><div>万州五桥机场</div></li>
                        <li data-value="WEF" data-tags="WeiFang" class="mui-table-view-cell mui-indexed-list-item"><div>潍坊机场</div></li>
                        <li data-value="WEH" data-tags="WeiHaiDaShuiBo" class="mui-table-view-cell mui-indexed-list-item"><div>威海大水泊机场</div></li>
                        <li data-value="WNH" data-tags="WenShanPuZheHei" class="mui-table-view-cell mui-indexed-list-item"><div>文山普者黑机场</div></li>
                        <li data-value="WNZ" data-tags="WenZhouYongQiangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>温州永强国际机场</div></li>
                        <li data-value="WUA" data-tags="WuHai" class="mui-table-view-cell mui-indexed-list-item"><div>乌海机场</div></li>
                        <li data-value="WUH" data-tags="WuHanTianHeGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>武汉天河国际机场</div></li>
                        <li data-value="HLH" data-tags="WuLanHaoTe" class="mui-table-view-cell mui-indexed-list-item"><div>乌兰浩特机场</div></li>
                        <li data-value="URC" data-tags="WuLuMuQiDiWoBaoGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>乌鲁木齐地窝堡国际机场</div></li>
                        <li data-value="WUS" data-tags="WuYiShan" class="mui-table-view-cell mui-indexed-list-item"><div>武夷山机场</div></li>
                        <li data-value="WUZ" data-tags="WuZhouChangZhouDao" class="mui-table-view-cell mui-indexed-list-item"><div>梧州长洲岛机场</div></li>
                        <li data-group="X" class="mui-table-view-divider mui-indexed-list-group">X</li>
                        <li data-value="XIY" data-tags="XiAnXianYangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>西安咸阳国际机场</div></li>
                        <li data-value="XIC" data-tags="XiChangQingShan" class="mui-table-view-cell mui-indexed-list-item"><div>西昌青山机场</div></li>
                        <li data-value="XIL" data-tags="XiLinHaoTe" class="mui-table-view-cell mui-indexed-list-item"><div>锡林浩特机场</div></li>
                        <li data-value="XNN" data-tags="XiNingCaoJiaBao" class="mui-table-view-cell mui-indexed-list-item"><div>西宁曹家堡机场</div></li>
                        <li data-value="JHG" data-tags="XiShuangBanNaGaSa" class="mui-table-view-cell mui-indexed-list-item"><div>西双版纳嘎洒机场</div></li>
                        <li data-value="XMN" data-tags="XiaMenGaoQiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>厦门高崎国际机场</div></li>
                        <li data-value="HKG" data-tags="XiangGangGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>香港国际机场</div></li>
                        <li data-value="XFN" data-tags="XiangYangLiuJi" class="mui-table-view-cell mui-indexed-list-item"><div>襄阳刘集机场</div></li>
                        <li data-value="ACX" data-tags="XingYi" class="mui-table-view-cell mui-indexed-list-item"><div>兴义机场</div></li>
                        <li data-value="XUZ" data-tags="XuZhouGuanYin" class="mui-table-view-cell mui-indexed-list-item"><div>徐州观音机场</div></li>
                        <li data-group="Y" class="mui-table-view-divider mui-indexed-list-group">Y</li>
                        <li data-value="ENY" data-tags="YanAnErShiLiBao" class="mui-table-view-cell mui-indexed-list-item"><div>延安二十里堡机场</div></li>
                        <li data-value="YNZ" data-tags="YanCheng" class="mui-table-view-cell mui-indexed-list-item"><div>盐城机场</div></li>
                        <li data-value="YNJ" data-tags="YanJiChaoYangChuan" class="mui-table-view-cell mui-indexed-list-item"><div>延吉朝阳川机场</div></li>
                        <li data-value="YNT" data-tags="YanTaiLaiShanGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>烟台莱山国际机场</div></li>
                        <li data-value="YBP" data-tags="YiBinCaiBa" class="mui-table-view-cell mui-indexed-list-item"><div>宜宾菜坝机场</div></li>
                        <li data-value="YIH" data-tags="YiChangSanXia" class="mui-table-view-cell mui-indexed-list-item"><div>宜昌三峡机场</div></li>
                        <li data-value="LDS" data-tags="YiChunLinDu" class="mui-table-view-cell mui-indexed-list-item"><div>伊春林都机场</div></li>
                        <li data-value="YIN" data-tags="YiNing" class="mui-table-view-cell mui-indexed-list-item"><div>伊宁机场</div></li>
                        <li data-value="YIW" data-tags="YiWu" class="mui-table-view-cell mui-indexed-list-item"><div>义乌机场</div></li>
                        <li data-value="INC" data-tags="YinChuanHeDong" class="mui-table-view-cell mui-indexed-list-item"><div>银川河东机场</div></li>
                        <li data-value="LLF" data-tags="YongZhouLingLing" class="mui-table-view-cell mui-indexed-list-item"><div>永州零陵机场</div></li>
                        <li data-value="UYN" data-tags="YuLinYuYang" class="mui-table-view-cell mui-indexed-list-item"><div>榆林榆阳机场</div></li>
                        <li data-value="YUS" data-tags="YuShuBaTang" class="mui-table-view-cell mui-indexed-list-item"><div>玉树巴塘机场</div></li>
                        <li data-value="YCU" data-tags="YunChengZhangXiao" class="mui-table-view-cell mui-indexed-list-item"><div>运城张孝机场</div></li>
                        <li data-group="Z" class="mui-table-view-divider mui-indexed-list-group">Z</li>
                        <li data-value="ZHA" data-tags="ZhanJiang" class="mui-table-view-cell mui-indexed-list-item"><div>湛江机场</div></li>
                        <li data-value="ZAT" data-tags="ZhaoTong" class="mui-table-view-cell mui-indexed-list-item"><div>昭通机场</div></li>
                        <li data-value="CGO" data-tags="ZhengZhouXinZhengGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>郑州新郑国际机场</div></li>
                        <li data-value="HJJ" data-tags="ZhiJiang" class="mui-table-view-cell mui-indexed-list-item"><div>芷江机场</div></li>
                        <li data-value="CKG" data-tags="ZhongQingJiangBeiGuoJi" class="mui-table-view-cell mui-indexed-list-item"><div>重庆江北国际机场</div></li>
                        <li data-value="ZHY" data-tags="ZhongWeiXiangShan" class="mui-table-view-cell mui-indexed-list-item"><div>中卫香山机场</div></li>
                        <li data-value="HSN" data-tags="ZhouShanZhuJiaJian" class="mui-table-view-cell mui-indexed-list-item"><div>舟山朱家尖机场</div></li>
                        <li data-value="ZUH" data-tags="ZhuHaiSanZao" class="mui-table-view-cell mui-indexed-list-item"><div>珠海三灶机场</div></li>
                    -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import "../less/address.less";
//    import "../../static/mui/mui.min.css";
//    import "../../static/mui/mui.indexedlist.css";

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

    export default {
        data: function () {
            return {
                list : []
            }
        },
        computed: {
            ...mapState({
            })
        },
        created: function () {
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
        beforeCreate: function(){

        },
        mounted: function () {
//            let indexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//            for (let i= 0,len=indexList.length; i<len; i++) {
//                let html = '<li data-group="'+indexList[i]+'" class="mui-table-view-divider mui-indexed-list-group">'+indexList[i]+'</li>';
//                for(let j=1; j<=100; j++) {
//                    html += '<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item"><div>'+indexList[i]+'       阿克苏机场'+j+'</div></li>';
//                }
//                //console.info(html);
//                document.getElementById("address_list").innerHTML += html;
//            }

            let indexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            for (let i= 0,len=indexList.length; i<len; i++) {
                this.list.push({'isIndex':true, 'value':indexList[i]});
                for(let j=1; j<=50; j++) {
                    this.list.push({'isIndex':false, 'value':indexList[i]+'   阿克苏机场'+j});
                }
            }

            mui.init();
            mui.ready(function() {
                var header = document.querySelector('header.mui-bar');
                var list = document.getElementById('list');
                //calc hieght

                list.style.height = (document.querySelector('.address-page').offsetHeight - 10 - header.offsetHeight) + 'px';
                //list.style.height = '1000px';
                //create
                window.indexedList = new mui.IndexedList(list);
            });


        }
    }
</script>

<style lang="less" scoped>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }
    .mui-bar {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>
