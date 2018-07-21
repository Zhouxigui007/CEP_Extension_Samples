(function () {
	'use strict';
	var csInterface = new CSInterface(); //CEPのライブラリ

	function init() {
		themeSynchronizer.init(); //パネルをアプリケーションテーマカラーに同期させる為のライブラリの初期化
		$("#aply").click(function () {  //HTMLフォームのボタンをクリックした時に実行される関数
			var str = $("input#str").val();  //テキストインプットの文字をstrに読み込みます。
			csInterface.evalScript('callExtendscriptFunc("' + str + '")',
				function(re){
					alert("alert from CEP side : " + re);
				});
			//evalScript関数は引数に与えられた文字列をホストアプリケーションでExtendscriptとして実行します。
			//CEP8以降ではテンプレートリテラルを利用可能です。
			//上記のevalScriptの引数は右のようになります。例）`callExtendscriptFunc("${str}")`
			//この時に参照されるのがmanifest.xmlに記述されたExtendscriptファイルです。
			//ExtendScriptからの返り値はこの様に関数にて受け取ることができます。
			//より複雑な処理が必要な場合はPlugPlugインターフェースによるイベント処理を利用することができます。
		});
	}
	init();
}());
	
