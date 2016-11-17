/**
 * Angularjs 语法高亮指令
 *
 * @required
 * SyntaxHighlighter
 * @see http://alexgorbatchev.com/SyntaxHighlighter/
 *
 * @see https://github.com/yangjunlong/SyntaxHighLighter
 *
 * @usage
 * <mi-syntaxhighlighter lang="Html" content="{{table}}" theme="django"></mi-syntaxhighlighter>
 * 
 * @author  Yang,junlong at 2016-08-22 16:52:55 build.
 * @version $Id$
 */

var app = require('app/app');
require('mix/lib/syntaxhighlighter/shCore');

app.registerDirective('miSyntaxhighlighter',  [function(){
	var langMap = {
		AppleScript: ['applescript'],
		AS3: ['as3'],
		Bash: ['bash'],
		ColdFusion: ['coldfusion'],
		Cpp: ['cpp', 'c', 'c++'],
		CSharp: ['c#', 'c-sharp', 'csharp'],
		Css: ['css'],
		Delphi: ['delphi', 'pascal'],
		Diff: ['diff', 'patch'],
		Erlang: ['erlang'],
		Groovy: ['groovy'],
		Java: ['java'],
		JavaFx: ['javafx'],
		JScript: ['js', 'jscript', 'javascript'],
		Perl: ['Perl'],
		Php: ['php'],
		Plain: ['plain'],
		PowerShell: ['powershell'],
		Python: ['python', 'py'],
		Ruby: ['ruby', 'rails', 'ror', 'rb'],
		Sass: ['sass'],
		Sql: ['sql'],
		Vb: ['vb','vb.net'],
		Xml: ['xml', 'xhtml', 'xslt', 'html', 'xhtml']
	};
	var themeMap = {
		Default: ['default'],
		Django: ['django'],
		Eclipse: ['eclipse'],
		Emacs: ['emacs'],
		FadeToGrey: ['fadetogrey'],
		MDUltra: ['mdultra'],
		Midnight: ['midnight'],
		RDark: ['rdark']
	};
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="mi-syntax-highlighter"></div>',
        scope: {
            lang: '@',
            content: '@',
            theme: '@'
        },
        link: function($scope, element, attrs) {
        	var lang = $scope.lang.toLowerCase();

        	angular.forEach(langMap, function(item, key) {
        		if(item.indexOf(lang) > -1) {
        			lang = key;
        			return;
        		}
        	});

        	var langFile = 'shBrush' + lang;
        	var brushFile = 'mix/lib/syntaxhighlighter/scripts/' + langFile

        	// 异步加载语法高亮插件
        	require.async(brushFile, function(SyntaxHighlighter) {
        		var brush = new SyntaxHighlighter.Brush();
        		brush.init({ toolbar: false });
				var html = brush.getHtml($scope.content);

				element.html(html);
        	});

        	if($scope.theme) {
        		var theme = $scope.theme.toLowerCase();
        		angular.forEach(themeMap, function(item, key) {
	        		if(item.indexOf(theme) > -1) {
	        			theme = key;
	        			return;
	        		}
	        	});

	        	var themeFile = 'mix/lib/syntaxhighlighter/styles/shTheme' + theme + '.css'
        		// load theme css
        		require.async(themeFile, function() {
	        		// TODO nothing
	        	});
        	}
        }
    };
}]);
