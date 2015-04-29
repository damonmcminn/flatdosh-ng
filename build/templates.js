angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html data-ng-app=\"flatdosh\"><head><title>flatdosh</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link href=\"https://maxcdn.bootstrapcdn.com/bootswatch/3.3.4/flatly/bootstrap.min.css\" rel=\"stylesheet\"><!--link(href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\", rel=\"stylesheet\")-->\n<!-- @if NODE_ENV!==\'dev\' --><script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.1/angular.min.js\"></script><!-- @endif -->\n<!-- @if NODE_ENV===\'dev\' --><script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-rc.1/angular.js\"></script><!-- @endif --><script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.1/ui-bootstrap-tpls.min.js\"></script><script type=\"text/javascript\" src=\"templates.js\"></script><script type=\"text/javascript\" src=\"bundle.js\"></script><link href=\"style.css\" rel=\"stylesheet\"></head><body><div data-ng-controller=\"mainCtrl as main\"><nav data-ng-show=\"main.loggedIn\" class=\"navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-ng-click=\"main.toggleCollapsed()\" aria-expanded=\"false\" aria-controls=\"navbar\" class=\"navbar-toggle collapsed\"><span class=\"sr-only\">Toggle nav</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><div class=\"navbar-brand\">Hello, {{main.name}}!</div></div><div id=\"navbar\" collapse=\"main.collapsed\" class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav\"><li data-ng-class=\"{&quot;active&quot;: main.page === &quot;save&quot;}\"><a href=\"#\" data-ng-click=\"main.change(&quot;save&quot;)\">Save expense</a></li><li data-ng-class=\"{&quot;active&quot;: main.page === &quot;history&quot;}\"><a href=\"#\" data-ng-click=\"main.change(&quot;history&quot;)\">Expense history</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li data-ng-click=\"main.logout()\"><a href=\"#\">Logout</a></li></ul></div></div></nav><!-- unnecessary as head is blocking evertying...--><!--div(data-ng-if=\"true\").text-center--><!--  h4 Loading... hold your horses!--><!--  i.fa.fa-cog.fa-spin.fa-5x(id=\'loading-cog\')--><div class=\"container\"><div id=\"login\" data-ng-include=\"\'login/index.html\'\" data-ng-if=\"!main.loggedIn\"></div><div data-ng-if=\"main.loggedIn\"><div id=\"balances\" data-ng-include=\"&quot;balance/index.html&quot;\"></div><div id=\"expense\" data-ng-include=\"&quot;expense/index.html&quot;\" data-ng-show=\"main.page === &quot;save&quot;\"></div><div id=\"history\" data-ng-include=\"&quot;history/index.html&quot;\" data-ng-show=\"main.page === &quot;history&quot;\"></div></div></div></div></body></html>");
$templateCache.put("expense/index.html","<div data-ng-controller=\"expenseCtrl as vm\"><form data-ng-submit=\"vm.save()\" name=\"expense\" class=\"container-fluid\"><div class=\"form-group\"><label>Amount</label><input data-ng-model=\"vm.expense.amount\" type=\"number\" required=\"required\" min=\"0.01\" step=\"0.01\" class=\"form-control\"/></div><div class=\"form-group\"><label>Description</label><input data-ng-model=\"vm.expense.description\" type=\"text\" required=\"required\" class=\"form-control\"/></div><div class=\"form-group row\"><div class=\"col-xs-12\"><button type=\"submit\" data-ng-disabled=\"expense.$invalid\" class=\"btn btn-primary\">SAVE</button></div></div></form><hr/></div>");
$templateCache.put("history/index.html","<div data-ng-controller=\"historyCtrl as vm\"><table class=\"table table-bordered table-striped\"><thead><tr><th>Name</th><th class=\"text-right\">Amount</th><th class=\"text-right\">When</th></tr></thead><tbody><tr data-ng-repeat=\"expense in vm.history\"><td>{{expense.name}}</td><td class=\"text-right\">{{expense.amount | money}}</td><td class=\"text-right\">{{expense.timestamp | date}}</td></tr></tbody></table></div>");
$templateCache.put("login/index.html","<div data-ng-controller=\"loginCtrl as vm\"><form data-ng-submit=\"vm.submit()\" data-ng-keydown=\"vm.error = null\" name=\"login\" class=\"container-fluid\"><tabset><tab heading=\"Login\" select=\"vm.select(&quot;login&quot;)\" active=\"vm.selectLogin\"></tab><tab heading=\"Register\" select=\"vm.select(&quot;register&quot;)\"><div class=\"form-group\"><label>Name</label><input data-ng-model=\"vm.user.name\" type=\"text\" data-ng-required=\"vm.action === &quot;register&quot;\" class=\"form-control\"/></div></tab></tabset><span class=\"form-error\">{{vm.error}}</span><div data-ng-class=\"{&quot;has-error&quot;: vm.error === &quot;User not found&quot;}\" class=\"form-group\"><label>Email</label><input data-ng-model=\"vm.user.email\" type=\"email\" required=\"required\" placeholder=\"name@domain.tld\" class=\"form-control\"/></div><div data-ng-class=\"{&quot;has-error&quot;: vm.error === &quot;Bad password&quot;}\" class=\"form-group\"><label>Password</label><input data-ng-model=\"vm.user.password\" type=\"password\" required=\"required\" placeholder=\"correct horse battery staple\" class=\"form-control\"/></div><div class=\"form-group row\"><div class=\"col-xs-12\"><button type=\"submit\" data-ng-disabled=\"login.$invalid\" class=\"btn btn-primary\">{{vm.action | uppercase}}</button></div></div></form></div>");
$templateCache.put("balance/index.html","<div data-ng-controller=\"balanceCtrl as vm\" class=\"text-center\"><table class=\"table table-bordered\"><thead><tr><th data-ng-repeat=\"balance in vm.balances\" class=\"text-center col-xs-2\">{{balance.name | uppercase}}</th></tr></thead><tbody><tr><td data-ng-repeat=\"balance in vm.balances\" data-ng-class=\"{&quot;warning&quot;:balance.warning, &quot;danger&quot;:balance.danger}\">{{balance.balance | money}}</td></tr></tbody></table></div>");}]);