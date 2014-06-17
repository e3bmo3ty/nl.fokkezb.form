Ext.data.JsonP.getting_started({"guide":"<h1 id='getting_started-section-getting-started'>Getting Started</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/getting_started-section-1.-creating-a-widget-instance'>1. Creating a widget instance</a></li>\n<li><a href='#!/guide/getting_started-section-2.-initializing-the-widget'>2. Initializing the widget</a></li>\n</ol>\n</div>\n\n<p>You can create and intialize the widget in many different ways or a combination of.</p>\n\n<h2 id='getting_started-section-1.-creating-a-widget-instance'>1. Creating a widget instance</h2>\n\n<p>You can do this in a controller:</p>\n\n<pre><code>var form = Alloy.createWidget('nl.fokkzb.form');\n</code></pre>\n\n<p>Or in a view:</p>\n\n<pre><code>&lt;Widget id=\"form\" src=\"nl.fokkezb.form\" /&gt;\n</code></pre>\n\n<h2 id='getting_started-section-2.-initializing-the-widget'>2. Initializing the widget</h2>\n\n<p>There are different moments and ways to initialize the widget.</p>\n\n<p>If the arguments for the <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-Controller\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-Controller\" class=\"docClass\">constructor</a> of the widget has a <code>fieldsets</code>, <code>fields</code> or <code>config</code> property, then it will automatically call <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a>. If it doesn't, then the arguments will saved to be <a href=\"#!/api/Widgets.nlFokkezbForm.lib.deepExtend\" rel=\"Widgets.nlFokkezbForm.lib.deepExtend\" class=\"docClass\">deep-extended</a> as defaults when you call <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> manually later. Would you happen to call <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> again after the constructor or yourself did so already, the last call will set the form.</p>\n\n<p>This logic makes that you can use a combination of the the following ways to set the properties for the intialisation from different files:</p>\n\n<h3 id='getting_started-section-in-js'>In JS</h3>\n\n<p>When you create a widget instance:</p>\n\n<pre><code>var form = Alloy.createWidget('nl.fokkezb.nl', {\n    fieldsets: [{\n        legend: 'My form',          \n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n});\n</code></pre>\n\n<p>Or later, e.g. after creating the instance in <code>XML</code>:</p>\n\n<pre><code>$.form.init({\n    fieldsets: [{\n        legend: 'My form',          \n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n});\n</code></pre>\n\n<p>And of course you could also set other properties then the 3 triggering <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> via <code>createWidget</code> and set the rest via a manual <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> call, but why one earth would you want to do that?!</p>\n\n<h3 id='getting_started-section-in-tss'>In TSS</h3>\n\n<p>Only if you create the widget instance in <code>XML</code> you can set some or all initialisation properties in <code>TSS</code>:</p>\n\n<pre><code>\"#form\": {\n    fieldsets: [{\n        legend: 'My form',          \n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n}   \n</code></pre>\n\n<p><strong>NOTE:</strong> Using TSS does not allow you to specify custom validators.</p>\n\n<h3 id='getting_started-section-in-xml'>In XML</h3>\n\n<p>When you create the widget instance in <code>XML</code> you can set some initialisation properties there as well:</p>\n\n<pre><code>&lt;Widget id=\"form\" src=\"nl.fokkezb.form\" legend=\"My form\" config=\"myForm.js\" /&gt;\n</code></pre>\n\n<p>Of course you can't specify arrays of fieldset and field objects, let alone custom validators.</p>\n\n<p>But you <em>can</em> use the <code>config</code> attribute to load a configuration file:</p>\n\n<h3 id='getting_started-section-in-a-configuration-file'>In a configuration file</h3>\n\n<p>If via any of the above ways you set the <code>config</code> property, the widget will extend whatever else properties you have set with the ones found in the specified CommonJS or JSON configuration file:</p>\n\n<h4 id='getting_started-section-json'>JSON</h4>\n\n<p>If <code>config</code> ends with <code>.json</code>, it will assume it to be a path absolute or relative to <code>Resources</code> and read and parse the contents of the file as JSON:</p>\n\n<pre><code>{\n    fieldsets: [{\n        legend: 'My form',          \n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n}\n</code></pre>\n\n<p><strong>NOTE:</strong> Using JSON does not allow you to specify custom validators. Instead of <code>L()</code> you can still use <code>labelid</code> and <code>legendid</code>.</p>\n\n<h4 id='getting_started-section-commonjs'>CommonJS</h4>\n\n<p>If not, it will assume it to be a relative path to a CommonJS module like:</p>\n\n<pre><code>module.exports = {\n    fieldsets: [{\n        legend: 'My form',          \n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n};\n</code></pre>\n","title":"Getting Started"});