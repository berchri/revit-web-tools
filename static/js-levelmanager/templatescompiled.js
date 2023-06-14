(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['1'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"level-card border rounded shadow p-2\">\r\n    <h1 class=\"h6 mb-2 card-head\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":40}}}) : helper)))
    + "_neu</h1>\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n        <div class=\"text-right\">RDUK</div>\r\n        <div class=\"input-group ml-2 card-input\">\r\n            <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":8,"column":25},"end":{"line":8,"column":38}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" data-add-Elevation=\"slab-increase\"\r\n                placeholder=\"Höhe eingeben\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":9,"column":55},"end":{"line":9,"column":68}}}) : helper)))
    + "\">\r\n            <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":51}}}) : helper)))
    + "-notification\"></div>\r\n            <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\">m</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['building_structure'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"d-flex flex-column col-slab px-3 pb-1\">\r\n        <div class=\"slab-height-increase\"></div>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"card_height") || (depth0 != null ? lookupProperty(depth0,"card_height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_height","hash":{},"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":25}}}) : helper))) != null ? stack1 : "")
    + " <div class=\"d-flex flex-column align-items-center mb-4\">\r\n            <button type=\"button\" class=\"btn-lm-add\" data-cardid=\"slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":21,"column":71},"end":{"line":21,"column":85}}}) : helper)))
    + "\">+</button>\r\n            <div class=\"level-card new-elevation border rounded shadow p-2\" id=\"slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":22,"column":85},"end":{"line":22,"column":99}}}) : helper)))
    + "\">\r\n                <h1 class=\"d-flex align-items-center h6 mb-2 card-head\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":78}}}) : helper)))
    + "_neu</h1>\r\n                <div class=\"d-flex justify-content-end align-items-center\">\r\n                    <div class=\"text-right\">RDUK</div>\r\n                    <div class=\"input-group ml-2 card-input\">\r\n                        <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":27,"column":37},"end":{"line":27,"column":50}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\"input-slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":27,"column":100},"end":{"line":27,"column":114}}}) : helper)))
    + "\"\r\n                            placeholder=\"Höhe eingeben\" data-type=\"slab-increase\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":28,"column":95},"end":{"line":28,"column":109}}}) : helper)))
    + "\">\r\n                        <div class=\"invalid-tooltip\" id=\"input-slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":29,"column":68},"end":{"line":29,"column":82}}}) : helper)))
    + "-notification\"></div>\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">m</span>\r\n                        </div>\r\n                    </div>\r\n                    <div><button type=\"button\" class=\"btn-lm-add-small\" id=\"btn-slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":34,"column":85},"end":{"line":34,"column":99}}}) : helper)))
    + "\"\r\n                            data-inputid=\"input-slab_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":67}}}) : helper)))
    + "\">+</button></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"d-flex flex-column col-slab px-3 pb-1\">\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"d-flex flex-column col-beam px-3 pb-1\">\r\n        <div class=\"beam\"></div>\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"card_beam") || (depth0 != null ? lookupProperty(depth0,"card_beam") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_beam","hash":{},"data":data,"loc":{"start":{"line":48,"column":8},"end":{"line":48,"column":23}}}) : helper))) != null ? stack1 : "")
    + " <div class=\"d-flex flex-column align-items-center mb-4\">\r\n            <button type=\"button\" class=\"btn-lm-add\" data-cardid=\"beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":49,"column":71},"end":{"line":49,"column":85}}}) : helper)))
    + "\">+</button>\r\n            <div class=\"level-card new-elevation border rounded shadow p-2\" id=\"beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":50,"column":85},"end":{"line":50,"column":99}}}) : helper)))
    + "\">\r\n                <h1 class=\"d-flex align-items-center h6 mb-2 card-head\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"beamID") || (depth0 != null ? lookupProperty(depth0,"beamID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beamID","hash":{},"data":data,"loc":{"start":{"line":51,"column":72},"end":{"line":51,"column":82}}}) : helper)))
    + "_neu</h1>\r\n                <div class=\"d-flex justify-content-end align-items-center\">\r\n                    <div class=\"text-right\">UZUK</div>\r\n                    <div class=\"input-group ml-2 card-input\">\r\n                        <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":55,"column":37},"end":{"line":55,"column":50}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\"input-beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":55,"column":100},"end":{"line":55,"column":114}}}) : helper)))
    + "\"\r\n                            placeholder=\"Höhe eingeben\" data-type=\"beam\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":56,"column":86},"end":{"line":56,"column":100}}}) : helper)))
    + "\">\r\n                        <div class=\"invalid-tooltip\" id=\"input-beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":57,"column":68},"end":{"line":57,"column":82}}}) : helper)))
    + "-notification\"></div>\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">m</span>\r\n                        </div>\r\n                    </div>\r\n                    <div><button type=\"button\" class=\"btn-lm-add-small\" id=\"btn-beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":62,"column":85},"end":{"line":62,"column":99}}}) : helper)))
    + "\"\r\n                            data-inputid=\"input-beam_"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":63,"column":53},"end":{"line":63,"column":67}}}) : helper)))
    + "\">+</button></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"d-flex flex-column col-beam px-3 pb-1\">\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex storey "
    + alias4(((helper = (helper = lookupProperty(helpers,"cssRow") || (depth0 != null ? lookupProperty(depth0,"cssRow") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssRow","hash":{},"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":36}}}) : helper)))
    + "\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":65}}}) : helper)))
    + "\">\r\n    <div class=\"d-flex flex-column justify-content-center col-storey px-3 py-1\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"card_storey") || (depth0 != null ? lookupProperty(depth0,"card_storey") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_storey","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n    <div class=\" d-flex flex-column justify-content-end col-wall\">\r\n        <div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cssWall") || (depth0 != null ? lookupProperty(depth0,"cssWall") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssWall","hash":{},"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":31}}}) : helper)))
    + "\"></div>\r\n    </div>\r\n    <div class=\"d-flex "
    + alias4(((helper = (helper = lookupProperty(helpers,"cssContainerLevels") || (depth0 != null ? lookupProperty(depth0,"cssContainerLevels") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssContainerLevels","hash":{},"data":data,"loc":{"start":{"line":13,"column":23},"end":{"line":13,"column":45}}}) : helper)))
    + " justify-content-between col-levels px-3 py-1\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"card_level") || (depth0 != null ? lookupProperty(depth0,"card_level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_level","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showSlabHeightIncrease") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showBeam") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":45,"column":4},"end":{"line":71,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['card_level'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"level-card border rounded shadow p-2 "
    + alias4(((helper = (helper = lookupProperty(helpers,"elevationDirectionClass") || (depth0 != null ? lookupProperty(depth0,"elevationDirectionClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elevationDirectionClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":49},"end":{"line":1,"column":76}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":93}}}) : helper)))
    + "\">\r\n    <div class=\"d-flex justify-content-between align-items-center mb-2 card-head\">\r\n        <h1 class=\"h6 mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":41}}}) : helper)))
    + "</h1>\r\n        <div>\r\n            <span class=\"icon-card-dir\" data-id=\"i-up-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":60}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#arrow-up-circle-fill\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n            <span class=\"icon-card-dir\" data-id=\"i-down-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":56},"end":{"line":10,"column":62}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#arrow-down-circle-fill\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n        <div class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":18,"column":45}}}) : helper)))
    + "</div>\r\n        <div class=\"input-group ml-2 card-input\">\r\n            <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":20,"column":25},"end":{"line":20,"column":38}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":77},"end":{"line":20,"column":83}}}) : helper)))
    + "\" placeholder=\"Höhe eingeben\"\r\n                value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelElevation") || (depth0 != null ? lookupProperty(depth0,"levelElevation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelElevation","hash":{},"data":data,"loc":{"start":{"line":21,"column":23},"end":{"line":21,"column":41}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":21,"column":54},"end":{"line":21,"column":67}}}) : helper)))
    + "\">\r\n            <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":45},"end":{"line":22,"column":51}}}) : helper)))
    + "-notification\"></div>\r\n            <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\">m</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['card_level_secondary'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"level-card border rounded shadow p-2\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":65}}}) : helper)))
    + "\">\r\n    <div class=\"d-flex justify-content-between align-items-center mb-2 card-head\">\r\n        <h1 class=\"h6 mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":41}}}) : helper)))
    + "</h1>\r\n        <div>\r\n            <span class=\"icon-card-dir\" data-id=\"i-up-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":60}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#arrow-up-circle-fill\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n            <span class=\"icon-card-dir\" data-id=\"i-down-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":56},"end":{"line":10,"column":62}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#arrow-down-circle-fill\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n        </div>\r\n        <div>\r\n            <button type=\"button\" class=\"close btn-close-card\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":17,"column":72},"end":{"line":17,"column":85}}}) : helper)))
    + "\">&times;</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n        <div class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":21,"column":32},"end":{"line":21,"column":45}}}) : helper)))
    + "</div>\r\n        <div><span class=\"h5 mb-0 text-lowercase\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelElevationUI") || (depth0 != null ? lookupProperty(depth0,"levelElevationUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelElevationUI","hash":{},"data":data,"loc":{"start":{"line":22,"column":50},"end":{"line":22,"column":70}}}) : helper)))
    + " m</span></div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['card_storey'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"level-card border rounded shadow p-2\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":65}}}) : helper)))
    + "\">\r\n    <div class=\"d-flex justify-content-between align-items-center mb-2 card-head\">\r\n        <h1 class=\"h6 mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":42}}}) : helper)))
    + "</h1>\r\n        <div>\r\n            <span class=\"icon-card-dir\" data-id=\"i-contract-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":66}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#chevron-contract\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n            <span class=\"icon-card-dir\" data-id=\"i-expand-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":58},"end":{"line":10,"column":64}}}) : helper)))
    + "\">\r\n                <svg class=\"icon-dir\">\r\n                    <use href=\"#chevron-expand\" class=\"icon-size-big\"></use>\r\n                </svg>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n        <div class=\"text-right\">Rohbauhöhe</div>\r\n        <div class=\"input-group ml-2 card-input input-storeyheight\">\r\n            <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":20,"column":25},"end":{"line":20,"column":39}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":78},"end":{"line":20,"column":84}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":20,"column":93},"end":{"line":20,"column":103}}}) : helper)))
    + "\"\r\n                data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":21,"column":27},"end":{"line":21,"column":40}}}) : helper)))
    + "\" />\r\n            <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"i-enumNr-unit\">m</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['element'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex\">\r\n    <div class=\"col col-"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":37}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":54}}}) : helper)))
    + "\"></div>\r\n    <div class=\"slab-container\">\r\n        <div class=\"fbok\"></div>\r\n        <div class=\"col "
    + alias4(((helper = (helper = lookupProperty(helpers,"rowHeight") || (depth0 != null ? lookupProperty(depth0,"rowHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowHeight","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":37}}}) : helper)))
    + " slab d-flex align-items-center\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":79},"end":{"line":5,"column":85}}}) : helper)))
    + "\">\r\n            <div class=\"input-group input-element\">\r\n                <input name=\"elementHeight\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":81},"end":{"line":7,"column":87}}}) : helper)))
    + "\" placeholder=\"Höhe eingeben\"\r\n                    value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"elementHeight") || (depth0 != null ? lookupProperty(depth0,"elementHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementHeight","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":44}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":8,"column":57},"end":{"line":8,"column":70}}}) : helper)))
    + "\" />\r\n                <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">m</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['element_col-2'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex\">\r\n    <div class=\"col col-"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":37}}}) : helper)))
    + "\"></div>\r\n    <div class=\"slab-container\">\r\n        <div class=\"fbok\"></div>\r\n        <div class=\"col "
    + alias4(((helper = (helper = lookupProperty(helpers,"rowHeight") || (depth0 != null ? lookupProperty(depth0,"rowHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rowHeight","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":37}}}) : helper)))
    + " slab d-flex align-items-center\">\r\n            <div class=\"input-group slab-input\">\r\n                <input name=\"elementHeight\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":81},"end":{"line":7,"column":87}}}) : helper)))
    + "-input\"\r\n                    placeholder=\"Höhe eingeben\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"elementHeight") || (depth0 != null ? lookupProperty(depth0,"elementHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementHeight","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":72}}}) : helper)))
    + "\" />\r\n                <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">m</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['elevation_col-1'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex rh-1\">\r\n    <div class=\"col "
    + alias4(((helper = (helper = lookupProperty(helpers,"colWall") || (depth0 != null ? lookupProperty(depth0,"colWall") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colWall","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":31}}}) : helper)))
    + "\"></div>\r\n    <div class=\"col col-storeyheight\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":65}}}) : helper)))
    + "\"></div>\r\n    <div class=\"col col-inputs d-flex align-items-"
    + alias4(((helper = (helper = lookupProperty(helpers,"elevationDirectionClass") || (depth0 != null ? lookupProperty(depth0,"elevationDirectionClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elevationDirectionClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":77}}}) : helper)))
    + " py-1\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":4,"column":97},"end":{"line":4,"column":111}}}) : helper)))
    + "\">\r\n        <div class=\"level-card border rounded p-2\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":66}}}) : helper)))
    + "\">\r\n            <div class=\"d-flex justify-content-between align-items-center mb-2 card-head\">\r\n                <h1 class=\"h6 mb-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":49}}}) : helper)))
    + "</h1>\r\n                <div>\r\n                    <span class=\"icon-card-dir\" data-id=\"i-up-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":62},"end":{"line":9,"column":68}}}) : helper)))
    + "\">\r\n                        <svg class=\"icon-dir\">\r\n                            <use href=\"#arrow-up-circle-fill\" class=\"icon-size-big\"></use>\r\n                        </svg>\r\n                    </span>\r\n                    <span class=\"icon-card-dir\" data-id=\"i-down-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":64},"end":{"line":14,"column":70}}}) : helper)))
    + "\">\r\n                        <svg class=\"icon-dir\">\r\n                            <use href=\"#arrow-down-circle-fill\" class=\"icon-size-big\"></use>\r\n                        </svg>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <div class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":22,"column":40},"end":{"line":22,"column":53}}}) : helper)))
    + "</div>\r\n                <div class=\"input-group ml-2 card-input\">\r\n                    <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":24,"column":33},"end":{"line":24,"column":46}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":24,"column":85},"end":{"line":24,"column":91}}}) : helper)))
    + "\" placeholder=\"Höhe eingeben\"\r\n                        value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelElevation") || (depth0 != null ? lookupProperty(depth0,"levelElevation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelElevation","hash":{},"data":data,"loc":{"start":{"line":25,"column":31},"end":{"line":25,"column":49}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":25,"column":62},"end":{"line":25,"column":75}}}) : helper)))
    + "\" />\r\n                    <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":26,"column":53},"end":{"line":26,"column":59}}}) : helper)))
    + "-notification\"></div>\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">m</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['elevation_col-2'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex rh-1\">\r\n    <div class=\"col "
    + alias4(((helper = (helper = lookupProperty(helpers,"colWall") || (depth0 != null ? lookupProperty(depth0,"colWall") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colWall","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":31}}}) : helper)))
    + "\"></div>\r\n    <div class=\"col col-storeyheight\"></div>\r\n    <div class=\"col col-inputs d-flex align-items-"
    + alias4(((helper = (helper = lookupProperty(helpers,"elevationDirectionClass") || (depth0 != null ? lookupProperty(depth0,"elevationDirectionClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elevationDirectionClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":77}}}) : helper)))
    + " py-1\">\r\n        <div class=\"level-card border rounded p-2\">\r\n            <h6 class=\"mb-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":6,"column":29},"end":{"line":6,"column":42}}}) : helper)))
    + "</h6>\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <div class=\"text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":53}}}) : helper)))
    + "</div>\r\n                <div class=\"input-group ml-2 card-input\">\r\n                    <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":10,"column":33},"end":{"line":10,"column":46}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":85},"end":{"line":10,"column":91}}}) : helper)))
    + "\" placeholder=\"Höhe eingeben\"\r\n                        value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelElevation") || (depth0 != null ? lookupProperty(depth0,"levelElevation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelElevation","hash":{},"data":data,"loc":{"start":{"line":11,"column":31},"end":{"line":11,"column":49}}}) : helper)))
    + "\" />\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">m</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['export'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"list-group-item d-flex justify-content-between align-items-center px-5\">\r\n    <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":3,"column":10},"end":{"line":3,"column":23}}}) : helper)))
    + "</span>\r\n    <button type=\"button\" class=\"btn-swi ml-5 btn-export-download\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":4,"column":78},"end":{"line":4,"column":91}}}) : helper)))
    + "\">\r\n        <svg class=\"icon\">\r\n            <use href=\"#export\"></use>\r\n        </svg><span>an Revit senden</span>\r\n    </button>\r\n</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exportList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['navlink'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"#\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelStructureId") || (depth0 != null ? lookupProperty(depth0,"levelStructureId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelStructureId","hash":{},"data":data,"loc":{"start":{"line":2,"column":42},"end":{"line":2,"column":62}}}) : helper)))
    + "\">\r\n        <svg class=\"icon\">\r\n            <use href=\"#list-ul\"></use>\r\n        </svg><span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Bauteil") || (depth0 != null ? lookupProperty(depth0,"Bauteil") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Bauteil","hash":{},"data":data,"loc":{"start":{"line":5,"column":20},"end":{"line":5,"column":31}}}) : helper)))
    + "</span>\r\n    </a>\r\n</li>";
},"useData":true});
templates['new_element'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":47}}}) : helper)))
    + "\">\r\n    <div class=\"col-"
    + alias4(((helper = (helper = lookupProperty(helpers,"css") || (depth0 != null ? lookupProperty(depth0,"css") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"css","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":27}}}) : helper)))
    + "-empty\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":50}}}) : helper)))
    + "\"></div>\r\n    <div class=\"slab-container\">\r\n        <div class=\"fbok\"></div>\r\n        <div class=\"col "
    + alias4(((helper = (helper = lookupProperty(helpers,"css") || (depth0 != null ? lookupProperty(depth0,"css") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"css","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":31}}}) : helper)))
    + " d-flex align-items-center\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":74}}}) : helper)))
    + "\">\r\n            <div class=\"input-group input-element\">\r\n                <input name=\"elementHeight\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":81},"end":{"line":7,"column":87}}}) : helper)))
    + "\" placeholder=\"Höhe eingeben\"\r\n                    value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"elementHeight") || (depth0 != null ? lookupProperty(depth0,"elementHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"elementHeight","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":44}}}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":8,"column":57},"end":{"line":8,"column":70}}}) : helper)))
    + "\" />\r\n                <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">m</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['storeyheight'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex\">\r\n    <div class=\"col col-wall\"></div>\r\n    <div class=\"col col-storeyheight d-flex align-items-start py-1\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":95}}}) : helper)))
    + "\">\r\n        <div class=\"level-card border rounded p-2\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":60},"end":{"line":4,"column":66}}}) : helper)))
    + "\">\r\n            <h6 class=\"mb-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":43}}}) : helper)))
    + "</h6>\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <div class=\"text-right\">Rohbauhöhe</div>\r\n                <div class=\"input-group ml-2 card-input input-storeyheight\">\r\n                    <input name=\"EG\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":80}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":9,"column":89},"end":{"line":9,"column":99}}}) : helper)))
    + "\"\r\n                        data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"levelType") || (depth0 != null ? lookupProperty(depth0,"levelType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"levelType","hash":{},"data":data,"loc":{"start":{"line":10,"column":35},"end":{"line":10,"column":48}}}) : helper)))
    + "\" />\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" id=\"i-enumNr-unit\">m</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-inputs\" data-storey=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":59}}}) : helper)))
    + "\"></div>\r\n</div>";
},"useData":true});
templates['storeyheight_col-2'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"d-flex\">\r\n    <div class=\"col col-wall\"></div>\r\n    <div class=\"col col-storeyheight d-flex align-items-start py-1\">\r\n        <div class=\"level-card border rounded p-2\">\r\n            <h6 class=\"mb-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"storeyName") || (depth0 != null ? lookupProperty(depth0,"storeyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storeyName","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":43}}}) : helper)))
    + "</h6>\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <div class=\"text-right\">Rohbauhöhe</div>\r\n                <div class=\"input-group ml-2 card-input\">\r\n                    <input name=\"EG\" type=\"text\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":80}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":9,"column":89},"end":{"line":9,"column":99}}}) : helper)))
    + "\" />\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" id=\"i-enumNr-unit\">m</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-inputs \"></div>\r\n</div>";
},"useData":true});
})();