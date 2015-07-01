'use strict';

app.controller('homeController', ['$scope', 'weatherService','Poller','$localStorage','$http', function ($scope,weatherService,Poller,$localStorage,$http) {
    $scope.setting = $localStorage.setting;
    var d = new Date();

    $scope.curyear = d.getFullYear();


    $scope.madata = Poller.data;

    //$scope.logout = function () {
    //    loginService.logout();
    //}
  //
  //  console.log($scope.madata);

//    var graphsPoll = function() {
//console.log("imin");
//        //console.log('heeeeey');
//         var data = [];
//        //$http.get('http://'+$localStorage.setting.nas+'/js/api/ipx.php').then(function(r) {
//        $http.jsonp('http://'+$localStorage.setting.nas+'/graph.php').then(function(r) {
//
//            //data.ipx = r;
//            console.log(r.data);
//            //console.log(r);
//           return data = r.data;
//
//        });
//        //  data.calls++;
//        // return data;
//
//    };
    $scope.reset= function(q){

    if(confirm("\xCAtes-vous s\xFBr ?")){
        $http({
            method: 'GET',
            url: 'http://'+$localStorage.setting.nas+'/reset.php?q='+q
        }).success(function(data, status, headers, config) {
            alert(data)
        });
    }



    };
    $scope.chartConfig= {};
    $scope.charge="Charger graphique";
    $scope.loadgraph = function(){
        $scope.charge = "Chargement ...";
        $http({
            cache: true,
            method: 'GET',
            url: 'http://'+$localStorage.setting.nas+'/graph.php'
        }).success(function(data, status, headers, config) {
            $scope.charge="Recharger";




            //console.log(conso);

//        console.log(Date(data.TIMESTAMP[0]));
            $scope.chartConfig = {
                useHighStocks: true,
                //title: {
                //    text: 'GRAPH',
                //    x: -20 //center
                //},
                chart: {
                    zoomType: 'x'

                },





                navigator : {
                    enabled: true
                    //adaptToUpdatedData: false

                },
                rangeSelector: {
                    //allButtonsEnabled: false,
                    inputEnabled: true,
                    //allButtonsEnabled: true,
                    selected: 1
                },
                xAxis: {
                    type: 'datetime'

                    //labels: {
                    //    formatter: function() {
                    //        return Highcharts.dateFormat('%d-%m-%y %H:%M', this.value);
                    //    }
                    //},
                    //categories: data.TIMESTAMP
                    ////min: 0

                },
                yAxis: {
                    title: {
                        text: 'W'
                    }
                },

                //yAxis: {
                //    title: {
                //        text: 'W'
                //    }
                //},



                legend: {
                    enabled:true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },

                series: [{
                    name: 'Consomation',
                    type: 'area',
                    data: data.CONSO,
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: 'W'
                    }
                }, {
                    name: 'Production',
                    data:data.PROD,
                    type: 'area',
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: 'W'
                    }
                    // pointInterval: 24 * 3600 * 1000
                }]
            };



        }).error(function(data, status, headers, config) {
        });

    }


//var data = {};
  //   data = graphsPoll();
//    var data = {
//  "TIMESTAMP": [1430892302000, 1430892362000, 1430892421000, 1430892482000, 1430892541000, 1430892602000, 1430892661000, 1430892722000, 1430892781000, 1430892842000, 1430892901000, 1430892962000, 1430893021000, 1430893082000, 1430893141000, 1430893202000, 1430893261000, 1430893321000, 1430893382000, 1430893441000, 1430893502000, 1430893561000, 1430893622000, 1430893681000, 1430893742000, 1430893801000, 1430893862000, 1430893921000, 1430893982000, 1430894041000, 1430894102000, 1430894161000, 1430894222000, 1430894281000, 1430894342000, 1430894401000, 1430894462000, 1430894521000, 1430894582000, 1430894641000, 1430894702000, 1430894761000, 1430894822000, 1430894881000, 1430894942000, 1430895001000, 1430895062000, 1430895121000, 1430895182000, 1430895241000, 1430895302000, 1430895361000, 1430895422000, 1430895481000, 1430895541000, 1430895602000, 1430895662000, 1430895722000, 1430895781000, 1430895841000, 1430895902000, 1430895961000, 1430896022000, 1430896081000, 1430896142000, 1430896201000, 1430896262000, 1430896321000, 1430896382000, 1430896442000, 1430896502000, 1430896561000, 1430896622000, 1430896682000, 1430896741000, 1430896802000, 1430896861000, 1430896922000, 1430896981000, 1430897041000, 1430897101000, 1430897161000, 1430897222000, 1430897281000, 1430897342000, 1430897402000, 1430897461000, 1430897521000, 1430897582000, 1430897642000, 1430897701000, 1430897762000, 1430897821000, 1430897882000, 1430897941000, 1430898001000, 1430898061000, 1430898121000, 1430898182000, 1430898241000, 1430898302000, 1430898361000, 1430898422000, 1430898481000, 1430898542000, 1430898601000, 1430898662000, 1430898721000, 1430898782000, 1430898841000, 1430898901000, 1430898962000, 1430899021000, 1430899082000, 1430899141000, 1430899202000, 1430899261000, 1430899322000, 1430899382000, 1430899441000, 1430899502000, 1430899561000, 1430899622000, 1430899681000, 1430899742000, 1430899801000, 1430899862000, 1430899921000, 1430899982000, 1430900041000, 1430900102000, 1430900161000, 1430900222000, 1430900281000, 1430900342000, 1430900401000, 1430900462000, 1430900521000, 1430900582000, 1430900641000, 1430900702000, 1430900761000, 1430900822000, 1430900881000, 1430900942000, 1430901001000, 1430901062000, 1430901121000, 1430901182000, 1430901241000, 1430901302000, 1430901361000, 1430901422000, 1430901481000, 1430901542000, 1430901601000, 1430901662000, 1430901721000, 1430901782000, 1430901841000, 1430901902000, 1430901961000, 1430902022000, 1430902081000, 1430902142000, 1430902201000, 1430902262000, 1430902321000, 1430902382000, 1430902441000, 1430902502000, 1430902561000, 1430902622000, 1430902681000, 1430902742000, 1430902801000, 1430902862000, 1430902921000, 1430902982000, 1430903041000, 1430903102000, 1430903161000, 1430903222000, 1430903281000, 1430903342000, 1430903401000, 1430903462000, 1430903521000, 1430903582000, 1430903641000, 1430903702000, 1430903761000, 1430903822000, 1430903881000, 1430903942000, 1430904001000, 1430904062000, 1430904121000, 1430904182000, 1430904241000, 1430904302000, 1430904361000, 1430904422000, 1430904481000, 1430904542000, 1430904601000, 1430904662000, 1430904721000, 1430904782000, 1430904841000, 1430904902000, 1430904961000, 1430905022000, 1430905081000, 1430905142000, 1430905201000, 1430905262000, 1430905321000, 1430905382000, 1430905441000, 1430905502000, 1430905561000, 1430905622000, 1430905681000, 1430905742000, 1430905801000, 1430905862000, 1430905921000, 1430905982000, 1430906041000, 1430906102000, 1430906161000, 1430906222000, 1430906281000, 1430906342000, 1430906401000, 1430906462000, 1430906521000, 1430906582000, 1430906641000, 1430906702000, 1430906761000, 1430906822000, 1430906881000, 1430906942000, 1430907001000, 1430907062000, 1430907121000, 1430907182000, 1430907241000, 1430907302000, 1430907361000, 1430907422000, 1430907481000, 1430907541000, 1430907602000, 1430907661000, 1430907722000, 1430907781000, 1430907842000, 1430907901000, 1430907962000, 1430908021000, 1430908082000, 1430908141000, 1430908202000, 1430908261000, 1430908322000, 1430908381000, 1430908442000, 1430908501000, 1430908562000, 1430908621000, 1430908682000, 1430908741000, 1430908802000, 1430908861000, 1430908922000, 1430908981000, 1430909042000, 1430909101000, 1430909162000, 1430909221000, 1430909281000, 1430909342000, 1430909401000, 1430909462000, 1430909521000, 1430909582000, 1430909641000, 1430909702000, 1430909761000, 1430909822000, 1430909881000, 1430909942000, 1430910001000, 1430910062000, 1430910121000, 1430910182000, 1430910241000, 1430910302000, 1430910361000, 1430910422000, 1430910481000, 1430910542000, 1430910601000, 1430910662000, 1430910721000, 1430910782000, 1430910841000, 1430910902000, 1430910961000, 1430911021000, 1430911081000, 1430911141000, 1430911202000, 1430911261000, 1430911322000, 1430911381000, 1430911441000, 1430911502000, 1430911561000, 1430911622000, 1430911681000, 1430911742000, 1430911801000, 1430911862000, 1430911921000, 1430911982000, 1430912041000, 1430912101000, 1430912162000, 1430912221000, 1430912282000, 1430912341000, 1430912402000, 1430912461000, 1430912522000, 1430912581000, 1430912642000, 1430912701000, 1430912762000, 1430912821000, 1430912882000, 1430912941000, 1430913002000, 1430913061000, 1430913122000, 1430913181000, 1430913242000, 1430913301000, 1430913362000, 1430913421000, 1430913482000, 1430913541000, 1430913602000, 1430913661000, 1430913722000, 1430913782000, 1430913841000, 1430913902000, 1430913961000, 1430914022000, 1430914082000, 1430914141000, 1430914202000, 1430914261000, 1430914322000, 1430914381000, 1430914442000, 1430914501000, 1430914562000, 1430914621000, 1430914682000, 1430914741000, 1430914802000, 1430914861000, 1430914922000, 1430914981000, 1430915042000, 1430915102000, 1430915161000, 1430915222000, 1430915281000, 1430915341000, 1430915402000, 1430915461000, 1430915522000, 1430915582000, 1430915641000, 1430915702000, 1430915761000, 1430915822000, 1430915881000, 1430915942000, 1430916001000, 1430916061000, 1430916121000, 1430916181000, 1430916242000, 1430916301000, 1430916362000, 1430916421000, 1430916481000, 1430916542000, 1430916601000, 1430916662000, 1430916721000, 1430916782000, 1430916841000, 1430916902000, 1430916961000, 1430917022000, 1430917082000, 1430917141000, 1430917202000, 1430917261000, 1430917321000, 1430917381000, 1430917441000, 1430917501000, 1430917562000, 1430917621000, 1430917682000, 1430917741000, 1430917802000, 1430917861000, 1430917922000, 1430917981000, 1430918041000, 1430918102000, 1430918162000, 1430918221000, 1430918282000, 1430918341000, 1430918402000, 1430918461000, 1430918522000, 1430918581000, 1430918642000, 1430918701000, 1430918762000, 1430918821000, 1430918882000, 1430918941000, 1430919002000, 1430919061000, 1430919122000, 1430919181000, 1430919242000, 1430919301000, 1430919362000, 1430919421000, 1430919482000, 1430919541000, 1430919602000, 1430919661000, 1430919721000, 1430919782000, 1430919841000, 1430919902000, 1430919961000, 1430920021000, 1430920082000, 1430920141000, 1430920202000, 1430920261000, 1430920322000, 1430920381000, 1430920442000, 1430920502000, 1430920561000, 1430920621000, 1430920682000, 1430920741000, 1430920802000, 1430920862000, 1430920921000, 1430920981000, 1430921042000, 1430921101000, 1430921162000, 1430921221000, 1430921282000, 1430921341000, 1430921402000, 1430921461000, 1430921522000, 1430921582000, 1430921641000, 1430921702000, 1430921761000, 1430921822000, 1430921881000, 1430921942000, 1430922001000, 1430922062000, 1430922121000, 1430922182000, 1430922242000, 1430922301000, 1430922362000, 1430922421000, 1430922482000, 1430922541000, 1430922602000, 1430922661000, 1430922722000, 1430922781000, 1430922842000, 1430922901000, 1430922962000, 1430923021000, 1430923082000, 1430923141000, 1430923202000, 1430923261000, 1430923322000, 1430923381000, 1430923442000, 1430923501000, 1430923562000, 1430923621000, 1430923682000, 1430923741000, 1430923802000, 1430923861000, 1430923922000, 1430923981000, 1430924042000, 1430924101000, 1430924162000, 1430924221000, 1430924282000, 1430924341000, 1430924402000, 1430924461000, 1430924522000, 1430924581000, 1430924642000, 1430924701000, 1430924762000, 1430924821000, 1430924882000, 1430924941000, 1430925002000, 1430925061000, 1430925122000, 1430925181000, 1430925242000, 1430925301000, 1430925362000, 1430925421000, 1430925482000, 1430925541000, 1430925602000, 1430925661000, 1430925722000, 1430925781000, 1430925842000, 1430925901000, 1430925962000, 1430926021000, 1430926082000, 1430926143000, 1430926201000, 1430926261000, 1430926322000, 1430926381000, 1430926442000, 1430926501000, 1430926562000, 1430926622000, 1430926681000, 1430926742000, 1430926801000, 1430926862000, 1430926921000, 1430926982000, 1430927041000, 1430927102000, 1430927161000, 1430927222000, 1430927281000, 1430927342000, 1430927401000, 1430927462000, 1430927521000, 1430927582000, 1430927641000, 1430927702000, 1430927761000, 1430927822000, 1430927881000, 1430927942000, 1430928001000, 1430928062000, 1430928121000, 1430928182000, 1430928241000, 1430928302000, 1430928361000, 1430928422000, 1430928481000, 1430928542000, 1430928602000, 1430928661000, 1430928721000, 1430928782000, 1430928841000, 1430928902000, 1430928961000, 1430929022000, 1430929081000, 1430929142000, 1430929201000, 1430929262000, 1430929321000, 1430929382000, 1430929441000, 1430929502000, 1430929561000, 1430929622000, 1430929681000, 1430929742000, 1430929801000, 1430929862000, 1430929921000, 1430929982000, 1430930041000, 1430930102000, 1430930161000, 1430930221000, 1430930282000, 1430930341000, 1430930402000, 1430930461000, 1430930522000, 1430930581000, 1430930642000, 1430930701000, 1430930762000, 1430930821000, 1430930882000, 1430930941000, 1430931002000, 1430931061000, 1430931122000, 1430931181000, 1430931242000, 1430931301000, 1430931362000, 1430931421000, 1430931482000, 1430931541000, 1430931602000, 1430931661000, 1430931722000, 1430931781000, 1430931842000, 1430931901000, 1430931962000, 1430932021000, 1430932082000, 1430932141000, 1430932202000, 1430932261000, 1430932322000, 1430932381000, 1430932442000, 1430932501000, 1430932562000, 1430932621000, 1430932682000, 1430932741000, 1430932801000, 1430932862000, 1430932921000, 1430932981000, 1430933042000, 1430933101000, 1430933162000, 1430933221000, 1430933282000, 1430933341000, 1430933402000, 1430933461000, 1430933522000, 1430933581000, 1430933642000, 1430933701000, 1430933762000, 1430933821000, 1430933882000, 1430933941000, 1430934001000, 1430934061000, 1430934122000, 1430934181000, 1430934241000, 1430934302000, 1430934361000, 1430934422000, 1430934481000, 1430934542000, 1430934601000, 1430934662000, 1430934721000, 1430934782000, 1430934841000, 1430934901000, 1430934962000, 1430935021000, 1430935082000, 1430935141000, 1430935202000, 1430935261000, 1430935322000, 1430935381000, 1430935442000, 1430935501000, 1430935562000, 1430935622000, 1430935681000, 1430935742000, 1430935801000, 1430935861000, 1430935922000, 1430935981000, 1430936042000, 1430936101000, 1430936162000, 1430936221000, 1430936282000, 1430936341000, 1430936402000, 1430936462000, 1430936521000, 1430936582000, 1430936641000, 1430936702000, 1430936762000, 1430936821000, 1430936882000, 1430936941000, 1430937002000, 1430937061000, 1430937122000, 1430937181000, 1430937242000, 1430937301000, 1430937361000, 1430937422000, 1430937481000, 1430937542000, 1430937602000, 1430937661000, 1430937721000, 1430937782000, 1430937841000, 1430937902000, 1430937961000, 1430938021000, 1430938081000, 1430938142000, 1430938201000, 1430938262000, 1430938321000, 1430938382000, 1430938442000, 1430938501000, 1430938562000, 1430938621000, 1430938682000, 1430938741000, 1430938802000, 1430938861000, 1430938922000, 1430938981000, 1430939042000, 1430939101000, 1430939162000, 1430939221000, 1430939282000, 1430939341000, 1430939402000, 1430939461000, 1430939522000, 1430939581000, 1430939642000, 1430939701000, 1430939762000, 1430939821000, 1430939882000, 1430939941000, 1430940002000, 1430940061000, 1430940122000, 1430940181000, 1430940242000, 1430940301000, 1430940361000, 1430940421000, 1430940481000, 1430940542000, 1430940602000, 1430940661000, 1430940722000, 1430940782000, 1430940841000, 1430940902000, 1430940961000, 1430941022000, 1430941081000, 1430941141000, 1430941201000, 1430941262000, 1430941321000, 1430941381000, 1430941442000, 1430941501000, 1430941562000, 1430941621000, 1430941682000, 1430941741000, 1430941802000, 1430941861000, 1430944441000, 1430944503000, 1430944561000, 1430944622000, 1430944681000, 1430944742000, 1430944801000, 1430944861000, 1430944921000, 1430944981000, 1430945042000, 1430945101000, 1430945162000, 1430945221000, 1430945282000, 1430945341000, 1430945402000, 1430945461000, 1430945522000, 1430945581000, 1430945641000, 1430945702000, 1430945761000, 1430945822000, 1430945881000, 1430945942000, 1430946001000, 1430946062000, 1430946121000, 1430946182000, 1430946241000, 1430946302000, 1430946361000, 1430946421000, 1430946482000, 1430946541000, 1430946602000, 1430946661000, 1430946722000, 1430946782000, 1430946841000, 1430946902000, 1430946962000, 1430947021000, 1430947082000, 1430947141000, 1430947202000, 1430947261000, 1430947322000, 1430947381000, 1430947442000, 1430947501000, 1430947562000, 1430947621000, 1430947982000, 1430948041000, 1430959442000, 1430959502000, 1430959561000, 1430959622000, 1430959681000, 1430959741000, 1430959802000, 1430959861000, 1430959922000, 1430959981000, 1430960041000, 1430960102000, 1430960161000, 1430960222000, 1430960281000, 1430960342000, 1430960402000, 1430960461000, 1430960522000, 1430960583000, 1430960642000, 1430960702000, 1430960762000, 1430960822000, 1430960883000, 1430960942000, 1430961002000, 1430961062000, 1430961122000, 1430961182000, 1430961241000, 1430961302000, 1430961361000, 1430961422000, 1430961481000, 1430961542000, 1430961601000, 1430961662000, 1430961721000, 1430961782000, 1430961841000, 1430961902000, 1430961961000, 1430962022000, 1430962081000, 1430962143000, 1430962201000, 1430962262000, 1430962321000, 1430962382000, 1430962441000, 1430962502000, 1430962562000, 1430962621000, 1430962681000, 1430962741000, 1430962802000, 1430962861000, 1430962922000, 1430962981000, 1430963042000, 1430963101000, 1430963162000, 1430963221000, 1430963281000, 1430963341000, 1430963401000, 1430963462000, 1430963522000, 1430963581000, 1430963642000, 1430963701000, 1430963762000, 1430963821000, 1430963882000, 1430963941000, 1430964002000, 1430964061000, 1430964122000, 1430964181000, 1430964242000, 1430965981000, 1430966042000, 1430966101000, 1430966162000, 1430966222000, 1430966311000, 1430966394000, 1430966465000, 1430966506000, 1430966547000, 1430966582000, 1430966642000, 1430968682000, 1430968741000, 1430968802000, 1430968861000, 1430968922000, 1430968981000, 1430969041000, 1430969102000, 1430969162000, 1430969221000, 1430969282000, 1430969342000, 1430969401000, 1430969462000, 1430969521000, 1430969583000, 1430969642000, 1430969702000, 1430969763000, 1430969822000, 1430969881000, 1430969943000, 1430970002000, 1430970062000, 1430970121000, 1430970182000, 1430970242000, 1430970301000, 1430970362000, 1430970421000, 1430970482000, 1430970541000, 1430970601000, 1430970662000, 1430970721000, 1430970782000, 1430970841000, 1430970902000, 1430970961000, 1430971022000, 1430971081000, 1430971142000, 1430971201000, 1430971262000, 1430971322000, 1430971381000, 1430971442000, 1430971501000, 1430971561000, 1430971623000, 1430971682000, 1430971742000, 1430971801000, 1430971862000, 1430971922000, 1430971982000, 1430972042000, 1430972102000, 1430972162000, 1430972222000, 1430972281000, 1430972343000, 1430972402000, 1430972462000, 1430972522000, 1430972582000, 1430972641000, 1430972703000, 1430972762000, 1430972822000, 1430972882000, 1430972941000, 1430973002000, 1430973062000, 1430973121000, 1430973182000, 1430973241000, 1430973302000, 1430973361000, 1430973422000, 1430973481000, 1430973542000, 1430973601000, 1430973662000, 1430973722000, 1430973781000, 1430973841000, 1430973902000, 1430973961000, 1430974022000, 1430974081000, 1430974142000, 1430974201000, 1430974262000, 1430974321000, 1430974382000, 1430974441000, 1430974502000, 1430974565000, 1430974622000, 1430974681000, 1430974741000, 1430974802000, 1430974861000, 1430974922000, 1430974981000, 1430975042000, 1430975101000, 1430975162000, 1430975221000, 1430975281000, 1430975342000, 1430975401000, 1430975462000, 1430975521000, 1430975582000, 1430975641000, 1430975702000, 1430975761000, 1430975822000, 1430975881000, 1430975942000, 1430976002000, 1430976061000, 1430976121000, 1430976182000, 1430976241000, 1430976302000, 1430976361000, 1430976421000, 1430976482000, 1430976541000, 1430976602000, 1430976661000, 1430976722000, 1430976781000, 1430976842000, 1430976901000, 1430976962000, 1430977021000, 1430977082000, 1430977141000, 1430977202000, 1430977261000, 1430977322000, 1430977381000, 1430977442000, 1430977501000, 1430977562000, 1430977621000, 1430977682000, 1430977743000, 1430977802000, 1430977862000, 1430977922000, 1430977981000, 1430978042000, 1430978102000, 1430978161000, 1430978222000, 1430978281000, 1430978342000, 1430978401000, 1430978461000, 1430978522000, 1430978581000, 1430978641000, 1430978702000, 1430978762000, 1430978821000, 1430978882000, 1430978941000, 1430979002000, 1430979061000, 1430979122000, 1430979181000, 1430979242000, 1430979301000, 1430979362000, 1430979421000, 1430979481000, 1430979542000, 1430979601000, 1430979662000, 1430979721000, 1430979782000, 1430979841000, 1430979902000, 1430979961000, 1430980022000, 1430980081000, 1430980142000, 1430980201000, 1430980262000, 1430980321000, 1430980381000, 1430980442000, 1430980501000, 1430980562000, 1430980621000, 1430980682000, 1430980741000, 1430980802000, 1430980861000, 1430980922000, 1430980981000, 1430981042000, 1430981101000, 1430981162000, 1430981221000, 1430981282000, 1430981372000, 1430981402000, 1430981462000, 1430981522000, 1430981581000, 1430981642000, 1430981702000, 1430981762000, 1430981821000, 1430981882000, 1430981950000, 1430982001000, 1430982062000, 1430982121000, 1430982182000, 1430982241000, 1430982302000, 1430982361000, 1430982422000, 1430982481000, 1430982542000, 1430982601000, 1430982662000, 1430982721000, 1430982782000, 1430982841000, 1430982901000, 1430982961000, 1430983022000, 1430983081000, 1430983142000, 1430983202000, 1430983261000, 1430983322000, 1430983382000, 1430983441000, 1430983502000, 1430983561000, 1430983622000, 1430983681000, 1430983742000, 1430983801000, 1430983861000, 1430983921000, 1430983981000, 1430984042000, 1430984101000, 1430984162000, 1430984221000, 1430984282000, 1430984341000, 1430984402000, 1430984461000, 1430984522000, 1430984581000, 1430984642000, 1430984701000, 1430984761000, 1430984822000, 1430984881000, 1430984942000, 1430985002000, 1430985061000, 1430985121000, 1430985182000, 1430985241000, 1430985302000, 1430985361000, 1430985422000, 1430985481000, 1430985542000, 1430985601000, 1430985662000, 1430985721000, 1430985782000, 1430985841000, 1430985902000, 1430985961000, 1430986022000, 1430986081000, 1430986142000, 1430986201000, 1430986262000, 1430986321000, 1430986382000, 1430986441000, 1430986502000, 1430986561000, 1430986622000, 1430986681000, 1430986742000, 1430986801000, 1430986862000, 1430986921000, 1430986982000, 1430987041000, 1430987102000, 1430987161000, 1430987222000, 1430987281000, 1430987342000, 1430987401000, 1430987461000, 1430987522000, 1430987582000, 1430987641000, 1430987702000, 1430987762000, 1430987821000, 1431817022000, 1431817081000, 1431817142000, 1431817201000, 1431817262000, 1431817321000, 1431817382000, 1431817441000, 1431817502000, 1431817561000, 1431817622000, 1431817682000, 1431817741000, 1431817802000, 1431817861000, 1431817922000, 1431817981000, 1431818042000, 1431818101000, 1431818162000, 1431818222000, 1431818281000, 1431818342000, 1431818401000, 1431818462000, 1431818521000, 1431818582000, 1431818641000, 1431818702000, 1431818761000, 1431818822000, 1431818881000, 1431818942000, 1431819001000, 1431819062000, 1431819121000, 1431819182000, 1431819241000, 1431819302000, 1431819361000, 1431819421000, 1431819482000, 1431819541000, 1431819602000, 1431819661000, 1431819722000, 1431819781000, 1431819842000, 1431819901000, 1431819962000, 1431820021000, 1431820082000, 1431820141000, 1431820202000, 1431820261000, 1431820322000, 1431820381000, 1431820442000, 1431820501000, 1431820562000, 1431820621000, 1431820682000, 1431820741000, 1431820802000, 1431820858000, 1431820861000, 1431820922000, 1431820981000, 1431821041000, 1431821102000, 1431821161000, 1431821222000, 1431821281000, 1431821342000, 1431821401000, 1431821462000, 1431821521000, 1431821582000, 1431821641000, 1431821702000, 1431821761000, 1431821821000, 1431821882000, 1431821941000],
//  "CONSO": [34, 33, 30, 36, 34, 32, 43, 37, 39, 39, 39, 39, 0, 0, 0, 0, 0, 35, 35, 35, 37, 40, 45, 18, 75, 35, 41, 41, 45, 41, 41, 23, 40, 42, 44, 44, 20, 39, 43, 35, 34, 42, 49, 50, 42, 40, 39, 47, 48, 20, 42, 42, 44, 31, 43, 47, 31, 36, 42, 44, 46, 34, 38, 40, 38, 27, 38, 38, 26, 44, 49, 52, 46, 45, 44, 38, 47, 47, 47, 43, 45, 23, 49, 25, 42, 26, 33, 19, 19, 43, 48, 45, 24, 47, 24, 23, 24, 24, 50, 49, 38, 47, 25, 39, 18, 20, 39, 36, 46, 43, 43, 37, 37, 37, 0, 43, 21, 77, 41, 43, 44, 33, 38, 23, 32, 40, 30, 18, 37, 35, 35, 37, 29, 42, 22, 36, 45, 44, 20, 22, 21, 18, 20, 23, 43, 25, 26, 49, 47, 44, 23, 49, 23, 42, 4, 38, 27, 25, 26, 40, 24, 45, 46, 47, 48, 46, 25, 47, 26, 20, 23, 40, 37, 40, 49, 41, 44, 48, 24, 47, 43, 39, 34, 37, 44, 42, 32, 39, 19, 35, 34, 45, 22, 41, 38, 46, 40, 49, 42, 39, 42, 47, 44, 41, 45, 23, 26, 41, 47, 46, 45, 46, 42, 48, 34, 36, 39, 44, 32, 38, 42, 35, 35, 42, 40, 35, 41, 41, 34, 38, 39, 37, 47, 45, 38, 42, 50, 21, 40, 34, 40, 29, 24, 44, 39, 36, 34, 33, 32, 34, 37, 34, 17, 22, 30, 45, 38, 41, 27, 41, 36, 47, 37, 41, 36, 36, 37, 34, 36, 24, 44, 42, 42, 44, 25, 44, 36, 31, 22, 95, 49, 38, 36, 24, 42, 44, 40, 36, 67, 35, 40, 44, 48, 36, 36, 35, 24, 17, 36, 29, 39, 48, 30, 37, 32, 48, 43, 45, 32, 42, 31, 32, 34, 39, 35, 33, 33, 36, 33, 41, 33, 33, 29, 29, 30, 30, 35, 47, 33, 26, 44, 38, 45, 45, 28, 30, 37, 46, 42, 30, 30, 41, 19, 37, 33, 40, 31, 30, 38, 43, 28, 65, 59, 28, 35, 38, 30, 29, 33, 37, 18, 34, 36, 32, 28, 32, 38, 61, 35, 14, 34, 28, 41, 34, 20, 30, 40, 37, 18, 36, 39, 29, 32, 37, 38, 35, 41, 32, 40, 40, 37, 39, 47, 19, 33, 31, 40, 39, 67, 36, 34, 0, 33, 29, 31, 27, 27, 28, 28, 33, 36, 21, 40, 36, 21, 32, 30, 27, 33, 28, 33, 33, 33, 37, 32, 23, 18, 32, 31, 37, 42, 25, 37, 20, 40, 25, 23, 25, 23, 23, 23, 19, 44, 41, 40, 39, 40, 42, 63, 18, 37, 33, 67, 29, 35, 32, 33, 33, 39, 39, 34, 41, 34, 21, 26, 64, 30, 27, 32, 33, 30, 35, 47, 41, 35, 57, 34, 54, 39, 37, 25, 32, 39, 39, 18, 39, 38, 41, 43, 30, 37, 39, 32, 34, 32, 35, 37, 35, 16, 41, 43, 40, 37, 38, 35, 32, 38, 40, 33, 35, 28, 34, 15, 14, 39, 41, 33, 42, 33, 36, 36, 42, 38, 36, 21, 36, 43, 39, 41, 41, 40, 18, 19, 44, 32, 31, 30, 33, 40, 43, 30, 40, 44, 20, 42, 38, 19, 45, 41, 44, 41, 42, 40, 43, 45, 46, 45, 36, 47, 44, 29, 50, 37, 44, 44, 50, 43, 43, 37, 43, 27, 46, 21, 21, 24, 45, 25, 44, 27, 25, 25, 50, 23, 23, 22, 21, 23, 40, 39, 39, 22, 22, 23, 21, 22, 21, 23, 44, 21, 35, 22, 21, 21, 23, 19, 35, 23, 19, 43, 20, 19, 24, 18, 23, 22, 25, 20, 36, 18, 21, 22, 22, 23, 19, 21, 22, 18, 32, 39, 19, 19, 21, 21, 21, 25, 21, 22, 22, 22, 21, 21, 21, 20, 44, 20, 19, 20, 21, 16, 43, 22, 34, 21, 20, 19, 16, 20, 17, 33, 35, 20, 21, 22, 22, 19, 38, 21, 20, 20, 19, 34, 18, 20, 20, 38, 20, 23, 20, 20, 19, 35, 38, 21, 22, 19, 20, 19, 19, 36, 41, 42, 38, 36, 39, 36, 39, 42, 40, 32, 34, 37, 35, 33, 40, 44, 38, 35, 41, 40, 37, 35, 36, 38, 34, 42, 20, 39, 42, 36, 53, 43, 38, 44, 40, 37, 36, 40, 35, 38, 40, 19, 39, 20, 17, 22, 34, 36, 38, 38, 36, 38, 43, 32, 40, 39, 19, 43, 40, 36, 40, 34, 42, 21, 30, 39, 39, 37, 42, 33, 37, 39, 19, 34, 31, 38, 35, 37, 34, 30, 52, 39, 36, 34, 72, 41, 37, 39, 36, 43, 39, 18, 34, 73, 38, 37, 40, 46, 40, 32, 36, 28, 33, 39, 41, 22, 24, 33, 36, 28, 36, 29, 64, 39, 22, 39, 37, 22, 45, 23, 22, 26, 35, 64, 15, 26, 35, 43, 44, 21, 22, 41, 42, 20, 23, 21, 35, 37, 29, 41, 30, 64, 18, 36, 32, 34, 28, 37, 35, 39, 39, 32, 34, 29, 27, 19, 39, 34, 36, 36, 34, 40, 36, 37, 19, 32, 36, 27, 32, 17, 35, 19, 18, 37, 18, 38, 59, 34, 37, 58, 41, 17, 25, 28, 28, 30, 32, 39, 41, 21, 41, 35, 58, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 1, 17, 23, 28, 37, 43, 28, 39, 28, 29, 35, 28, 28, 15, 14, 28, 31, 33, 33, 33, 31, 31, 31, 34, 28, 37, 46, 28, 38, 31, 31, 14, 35, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 68, 51, 51, 109, 69, 67, 36, 35, 39, 33, 37, 33, 37, 36, 39, 38, 38, 36, 34, 34, 38, 33, 34, 37, 37, 37, 39, 31, 32, 30, 35, 35, 34, 34, 36, 36, 40, 35, 38, 36, 34, 34, 33, 38, 38, 38, 38, 35, 38, 38, 37, 34, 38, 38, 38, 33, 40, 37, 34, 62, 45, 39, 41, 41, 40, 45, 45, 74, 38, 38, 47, 41, 40, 40, 37, 34, 38, 36, 38, 37, 41, 35, 35, 43, 70, 35, 39, 74],
//  "PROD": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//};
//data =  $scope.madata.graphs;



    //$scope.chartConfig = {
    //    title: {
    //        text: 'GRAPH D`ANNEE',
    //        x: -20 //center
    //    },
    //    chart: {
    //        type: 'line',
    //        zoomType: 'x'
    //
    //    },
    //    xAxis: {
    //        type: 'datetime',
    //
    //        labels: {
    //            formatter: function() {
    //                return Highcharts.dateFormat('%m-%d %H:%M', this.value);
    //            }
    //        },
    //        categories: data.TIMESTAMP,
    //        min: 0
    //        },
    //
    //
    //    yAxis: {
    //        title: {
    //            text: 'W'
    //        }
    //    },
    //
    //
    //    legend: {
    //        layout: 'vertical',
    //        align: 'right',
    //        verticalAlign: 'middle',
    //        borderWidth: 0
    //    },
    //    series: [{
    //        name: 'Consomation',
    //        data: data.CONSO
    //    }, {
    //        name: 'Production',
    //        data: data.PROD
    //    }]
    //};
  //



  // console.log(Poller.data.ipx);
  //  console.log(Poller.data);
  // $scope.eqpstat = [];
  //$scope.eqpstat['product'] = Poller.data.ipx.product;
  //for(var i= 0 ; i<33 ; i++){
  //
  //
  //
  // }

    $scope.eqpstat = $scope.madata.stat;

  // console.log($scope.eqpstat.product);
   //
    $scope.ChangeCity = function(city){
        var result = weatherService.getWeather(city);
       // $scope.weather = result;

        $localStorage.city = city;
        };

    //$scope.IpSetting = function(setting){
    //
    //    $localStorage.setting = setting;
    //
    //
    //};




        //console.log($scope.setting);

        //$scope.weather = weatherService.getWeather($localStorage.city);
        $scope.weather = Poller.data.weath;
    $scope.selecteqp = function(eqp){

        //if($scope.eqpstat[eqp]==1){
        //    $scope.eqpstat[eqp]=0;
        //}else{
        //    $scope.eqpstat[eqp]=1;
        //}
//valueSensor

        $http.get('http://'+$scope.setting.ipx+'/leds.cgi?led='+eqp).success(function(data) {
            if (data) {

               // $scope.eqpstat[eqp]= !$scope.eqpstat[eqp];

            }
        });

    }


    $scope.selectplug = function(id,stat){

        if(stat==1){

            $http.jsonp('http://'+$scope.setting.zwave.user+':'+$scope.setting.zwave.password+'@'+$scope.setting.zwave.ip+'/api/callAction?deviceID='+id+'&name=turnOff').success(function(data) {
            });
    }else{

            $http.jsonp('http://'+$scope.setting.zwave.user+':'+$scope.setting.zwave.password+'@'+$scope.setting.zwave.ip+'/api/callAction?deviceID='+id+'&name=turnOn').success(function(data) {
            });
    }
//valueSensor
//        $http.get('http://192.168.1.251/api/callAction?deviceID='+eqp+'&name=turnOff').success(function(data) {
//            if (data) {
//
//                $scope.eqpstat[eqp]= !$scope.eqpstat[eqp];
//
//            }
//        });

    }



}]);
