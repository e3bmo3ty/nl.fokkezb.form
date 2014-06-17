Ext.data.JsonP.fieldsets({"guide":"<h1 id='fieldsets-section-fieldsets'>Fieldsets</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/fieldsets-section-all-forms-require-a-fieldset..'>All forms require a fieldset..</a></li>\n<li><a href='#!/guide/fieldsets-section-but-it-can-create-one-for-you'>But it can create one for you</a></li>\n<li><a href='#!/guide/fieldsets-section-setting-a-legend'>Setting a legend</a></li>\n<li><a href='#!/guide/fieldsets-section-customize'>Customize</a></li>\n</ol>\n</div>\n\n<p>Fieldsets group fields <code>Ti.UI.TableViewRow</code> in a <code>Ti.UI.TableViewSection</code>.</p>\n\n<h2 id='fieldsets-section-all-forms-require-a-fieldset..'>All forms require a fieldset..</h2>\n\n<p>Fields are always wrapped in a fieldset. Fieldsets create a <a href=\"http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableViewSection\"><code>Ti.UI.TableViewSection</code></a> holding one or more fields, each creating a <a href=\"http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableViewRow\"><code>Ti.UI.TableViewRow</code></a>. And like all <a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/TableViews\">TableViews</a> require at least one section, so do our forms.</p>\n\n<h2 id='fieldsets-section-but-it-can-create-one-for-you'>But it can create one for you</h2>\n\n<p>If you don't have a <code>fieldsets</code> property in the root of your config, but you do have a <code>fields</code> property, then the widget will wrap it in a fieldset for you so that:</p>\n\n<pre><code>{\n    legend: 'My form',\n    fields: [{\n        name: 'name',\n        label: 'Your name',\n        type: 'text'\n    }],\n    values: {\n        name: 'Jeff'\n    }\n}\n</code></pre>\n\n<p>Equals:</p>\n\n<pre><code>{\n    fieldsets: [{\n        legend: 'My form',\n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }],\n    values: {\n        name: 'Jeff'\n    }\n}\n</code></pre>\n\n<h2 id='fieldsets-section-setting-a-legend'>Setting a legend</h2>\n\n<p>The <code>legend</code> property sets the <a href=\"http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableViewSection-property-headerTitle\"><code>headerTitle</code></a> property of the <code>Ti.UI.TableViewSection</code>.</p>\n\n<pre><code>{\n    fieldsets: [{\n        legend: 'My form',\n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n}\n</code></pre>\n\n<p>You can also use <code>legendid</code> in which case it will be processed by <code>L()</code>.</p>\n\n<h2 id='fieldsets-section-customize'>Customize</h2>\n\n<p>You can further customize the <code>Ti.UI.TableViewSection</code> in 2 ways:</p>\n\n<h3 id='fieldsets-section-apply-properties'>Apply properties</h3>\n\n<p>Set any <code>Ti.UI.TableViewSection</code> properties via the fieldset's <code>section</code> property:</p>\n\n<pre><code>{\n    fieldsets: [{\n        section: {\n            headerView: Ti.UI.createView( .. ),\n            footerTitle: 'Some text after the fields',\n            classes: ['customClass'], // section is created by $.UI.create()\n            rows: [\n                Ti.UI.createTableViewRow( .. ) // field rows will be appended\n            ]\n        },\n        fields: [{\n            name: 'name',\n            label: 'Your name',\n            type: 'text'\n        }]\n    }]\n}\n</code></pre>\n\n<h3 id='fieldsets-section-override-style'>Override style</h3>\n\n<p>The <code>Ti.UI.TableViewSection</code> is created using a <code>.section</code> class, unless you have set it to something else. As of Alloy 1.4.0 you can use this class to <a href=\"https://jira.appcelerator.org/browse/ALOY-378\">override the style using a theme</a> for the widget's <code>widget.tss</code> file.</p>\n","title":"Fieldsets"});