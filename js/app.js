var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){      // 변수로 사용
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "이종화";
        $rootScope.Email = "zhini0902@naver.com";
        $rootScope.tel = "010-6477-5158";
        $rootScope.MenuList = [
			"안녕하세요.",
            "일본어와 기초적인 개발이 가능한",
            "신입 구직자 이종화 입니다.",
            "잘 부탁드립니다.",
            "《보유기술》",
			"- Java(Spring, JSP, Servlet, Hadoop)",
            "- Python",
			"- HTML & CSS & JavaScript(jQuery)",
			"- Database(MySQL, MariaDB)",
			"- OS(Linux, Windows)"
			];
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [     // 프로젝트 관련 내용을 여기에 작성.
			{
			 path: "portfolio/",
			 url : "team/UI_PortFolio.html", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
             img2: "team/TeamImpression.png",
             img3: "team/media.gif",
			 type : true, 
			 contents: "명품 가방과 시계를 렌탈하는 사이트를 테마로 잡아 만든 웹 개발 프로젝트입니다. 1차 프로젝트는 팀 프로젝트로 진행, HTML/CSS만을 활용한 웹사이트 UI구현이 목적이었습니다. 2차 프로젝트는 1차에서 만들어진 사이트를 업그레이드 시켜 개인 프로젝트를 진행하였고, 스프링 프레임워크를 기반으로 데이터베이스와 연동된 웹사이트 구현을 진행하였습니다. 처음으로 하는 웹사이트 구현이었기에 많이 미숙하였지만, 이 프로젝트를 통해 UI 구현과 자바 스프링을 기반으로 하는 웹 제작 스킬의 기초를 숙련할 수 있었습니다. 사진을 클릭하시면 프로젝트의 UI에 관한 발표 자료로 이동합니다. 프로젝트의 소스는 https://github.com/jhcorea9n9q/Project_Team 에서 확인하여 주십시오."
			},{
			 path: "portfolio/",
			 url : "personal/personalProject.pdf", 
			 title: "Personal",
			 name: "Impression",
             img: "personal/PersonalImpression.png",
			 img2: "personal/PersonalImpression.png",
             img3: "personal/media.gif",    
			 type : false,
			 contents: "빅데이터를 통해 영화 통계를 보여주고, 영화 리뷰를 작성하는 것을 목적으로 한 개인 프로젝트입니다. 자바 연동 빅데이터 분석 플랫폼인 하둡과 스프링 프레임워크를 기반으로 하였으며, 데이터를 통한 차트 시각화가 주요 목적이었습니다. 사이트 기능에 미완성인 부분이 있어 아쉬웠지만, 언어 변환 기능과 로그인 화면에서의 일부 보안 기능 등 이전의 프로젝트보다 발전된 기법을 사용해볼 수 있어 보람있는 프로젝트였습니다. 사진을 클릭하시면 프로젝트 발표 때 사용된 PDF 자료로 이동합니다. 프로젝트의 소스는 https://github.com/jhcorea9n9q/Project 에서 확인하여 주십시오."
			},{
			 path: "media/",
			 url : "https://www.dropbox.com/s/1h5nr2h8mnj0zs2/ljh.mp4?dl=0", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.PNG",
             img2: "personal/PersonalMedia.PNG",
             img3: "personal/media_PPT.gif",
			 type : false, 
			 contents: "빅데이터 기반 개인 프로젝트의 PPT 발표 영상 자료입니다. 클릭하시면 Dropbox에 업로드된 영상 링크로 이동합니다."
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
        
        // 마우스 호버 시 기능
        $scope.hoverEv = function(index) {
            $("#portfolioGroup div img").eq(index).attr("src", 
            "images/" + $scope.dataSource[index].img3);
        }
        // 호버 사라질 때
        $scope.hoverOut = function(index) {
            $("#portfolioGroup div img").eq(index).attr("src", 
            "images/" + $scope.dataSource[index].img);
        }
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});