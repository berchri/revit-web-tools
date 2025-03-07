(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aType_boolean'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":3,"column":17},"end":{"line":3,"column":26}}}) : helper)))
    + "\" class=\"form-check-input\" type=\"checkbox\" value=\"true\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":112}}}) : helper)))
    + "\"\r\n        id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":21}}}) : helper)))
    + "-input\" checked "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":4,"column":37},"end":{"line":4,"column":57}}}) : helper)))
    + " />\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":26}}}) : helper)))
    + "\" class=\"form-check-input\" type=\"checkbox\" value=\"false\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":6,"column":99},"end":{"line":6,"column":113}}}) : helper)))
    + "\"\r\n        id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":21}}}) : helper)))
    + "-input\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":49}}}) : helper)))
    + " />\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-check my-4\" id=\"form-boolean\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValueDefault") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":46}}}) : helper)))
    + "-notification\"></div>\r\n    <label class=\"form-check-label\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":50}}}) : helper)))
    + "-input\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":10,"column":58},"end":{"line":10,"column":69}}}) : helper)))
    + "</label>\r\n    <small id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":24}}}) : helper)))
    + "Original\" class=\"form-text text-muted\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":11,"column":63},"end":{"line":11,"column":72}}}) : helper)))
    + "</small>\r\n</div>";
},"useData":true});
templates['aType_enum'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group my-4\" id=\"form-enum\">\r\n    <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":25}}}) : helper)))
    + "-select\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":45}}}) : helper)))
    + "</label>\r\n    <div class=\"input-group mb-0\">\r\n        <select name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":31}}}) : helper)))
    + "\" class=\"custom-select\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":4,"column":71},"end":{"line":4,"column":85}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":100}}}) : helper)))
    + "-select\"\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":32}}}) : helper)))
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValue") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n        <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":50}}}) : helper)))
    + "-notification\"></div>\r\n    </div>\r\n    <small id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":24}}}) : helper)))
    + "Original\" class=\"form-text text-muted mt-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":12,"column":68},"end":{"line":12,"column":77}}}) : helper)))
    + "</small>\r\n</div>";
},"useData":true});
templates['aType_enumNr'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group my-4\" id=\"form-enumNr\">\r\n    <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":25}}}) : helper)))
    + "-select\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":45}}}) : helper)))
    + "</label>\r\n    <div class=\"input-group mb-0\">\r\n        <select name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":31}}}) : helper)))
    + "\" class=\"custom-select\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":4,"column":71},"end":{"line":4,"column":85}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":100}}}) : helper)))
    + "-select\"\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":32}}}) : helper)))
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValue") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n        <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":50}}}) : helper)))
    + "-notification\">Fehler</div>\r\n        <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\" id=\"i-enumNr-unit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueUnit") || (depth0 != null ? lookupProperty(depth0,"aValueUnit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueUnit","hash":{},"data":data,"loc":{"start":{"line":12,"column":62},"end":{"line":12,"column":76}}}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n    <small id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":15,"column":15},"end":{"line":15,"column":24}}}) : helper)))
    + "Original\" class=\"form-text text-muted mt-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":15,"column":68},"end":{"line":15,"column":77}}}) : helper)))
    + "</small>\r\n</div>";
},"useData":true});
templates['aType_numericMeasure'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":5,"column":21},"end":{"line":5,"column":30}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":5,"column":81},"end":{"line":5,"column":95}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":5,"column":101},"end":{"line":5,"column":110}}}) : helper)))
    + "-input\"\r\n            placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueDefault") || (depth0 != null ? lookupProperty(depth0,"aValueDefault") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueDefault","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":42}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueDefault") || (depth0 != null ? lookupProperty(depth0,"aValueDefault") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueDefault","hash":{},"data":data,"loc":{"start":{"line":6,"column":51},"end":{"line":6,"column":68}}}) : helper)))
    + "\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":6,"column":70},"end":{"line":6,"column":90}}}) : helper)))
    + " />\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":30}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":8,"column":81},"end":{"line":8,"column":95}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":8,"column":101},"end":{"line":8,"column":110}}}) : helper)))
    + "-input\"\r\n            placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueDefault") || (depth0 != null ? lookupProperty(depth0,"aValueDefault") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueDefault","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":42}}}) : helper)))
    + "\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":9,"column":44},"end":{"line":9,"column":64}}}) : helper)))
    + " />\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group my-4\" id=\"form-numericMeasure\">\r\n    <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":25}}}) : helper)))
    + "-input\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":44}}}) : helper)))
    + "</label>\r\n    <div class=\"input-group mb-0\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValueDefault") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":11,"column":41},"end":{"line":11,"column":50}}}) : helper)))
    + "-notification\"></div>\r\n        <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\" id=\"i-enumNr-unit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueUnit") || (depth0 != null ? lookupProperty(depth0,"aValueUnit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueUnit","hash":{},"data":data,"loc":{"start":{"line":13,"column":62},"end":{"line":13,"column":76}}}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n    <small id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":16,"column":15},"end":{"line":16,"column":24}}}) : helper)))
    + "Original\" class=\"form-text text-muted mt-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":77}}}) : helper)))
    + "</small>\r\n</div>";
},"useData":true});
templates['aType_radio'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"custom-control custom-radio mb-2\">\r\n        <input type=\"radio\" id=\"radio-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":48}}}) : helper)))
    + "\" name=\""
    + alias4(alias5(((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"aName")), depth0))
    + "\" class=\"custom-control-input\" value=\""
    + alias4(alias5(depth0, depth0))
    + "\">\r\n        <label class=\"custom-control-label\" for=\"radio-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":55},"end":{"line":6,"column":65}}}) : helper)))
    + "\">"
    + alias4(alias5(depth0, depth0))
    + "</label>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"my-4\">\r\n    <label>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":22}}}) : helper)))
    + "</label>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValue") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['aType_string'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"input-group-text\">max. "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"aValueLength") || (depth0 != null ? lookupProperty(depth0,"aValueLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"aValueLength","hash":{},"data":data,"loc":{"start":{"line":10,"column":48},"end":{"line":10,"column":64}}}) : helper)))
    + " Zeichen</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <span class=\"input-group-text\">max. 15 Zeichen</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group my-4\" id=\"form-string\">\r\n    <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":25}}}) : helper)))
    + "-input\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aNameUI") || (depth0 != null ? lookupProperty(depth0,"aNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aNameUI","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":44}}}) : helper)))
    + "</label>\r\n    <div class=\"input-group mb-0\">\r\n        <input name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":30}}}) : helper)))
    + "\" type=\"text\" class=\"form-control\" data-valuetype=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueType") || (depth0 != null ? lookupProperty(depth0,"aValueType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueType","hash":{},"data":data,"loc":{"start":{"line":4,"column":81},"end":{"line":4,"column":95}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":4,"column":101},"end":{"line":4,"column":110}}}) : helper)))
    + "-input\"\r\n            placeholder=\"hier Text eingeben...\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"availableOnStart") || (depth0 != null ? lookupProperty(depth0,"availableOnStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availableOnStart","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":68}}}) : helper)))
    + "\r\n            data-whitespace-allowed=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueWhitespaceAllowed") || (depth0 != null ? lookupProperty(depth0,"aValueWhitespaceAllowed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueWhitespaceAllowed","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":64}}}) : helper)))
    + "\" data-string-length=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aValueLength") || (depth0 != null ? lookupProperty(depth0,"aValueLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aValueLength","hash":{},"data":data,"loc":{"start":{"line":6,"column":86},"end":{"line":6,"column":102}}}) : helper)))
    + "\" />\r\n        <div class=\"invalid-tooltip\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":50}}}) : helper)))
    + "-notification\"></div>\r\n        <div class=\"input-group-append\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aValueLength") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n    <small id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":16,"column":15},"end":{"line":16,"column":24}}}) : helper)))
    + "Original\" class=\"form-text text-muted mt-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"aName") || (depth0 != null ? lookupProperty(depth0,"aName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aName","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":77}}}) : helper)))
    + "</small>\r\n</div>";
},"useData":true});
templates['export'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"list-group-item d-flex justify-content-between align-items-center px-5\">\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameUI") || (depth0 != null ? lookupProperty(depth0,"eNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameUI","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":15}}}) : helper)))
    + "\r\n    <span class=\"badge badge-primary badge-pill ml-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"countedTypes") || (depth0 != null ? lookupProperty(depth0,"countedTypes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"countedTypes","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":70}}}) : helper)))
    + "</span>\r\n</li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<li class=\"list-group-item d-flex justify-content-between align-items-center px-5\">\r\n    Keine Elemente angelegt.\r\n    <span class=\"badge badge-primary badge-pill ml-1 float-right\"></span>\r\n</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"exportList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"exportList") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":12,"column":11}}})) != null ? stack1 : "");
},"useData":true});
templates['formHeading'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button type=\"button\" class=\"close\" id=\"btn-close-form\">&times;</button>\r\n<div class=\"pt-3 pb-2 mb3 border-bottom\">\r\n    <h3 id=\"buildingElement\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"psetNameUI") || (depth0 != null ? lookupProperty(depth0,"psetNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"psetNameUI","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":43}}}) : helper)))
    + "</h3>\r\n    <p class=\"h6 text-muted text-uppercase\" id=\"modelCategory\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"modelCategory") || (depth0 != null ? lookupProperty(depth0,"modelCategory") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelCategory","hash":{},"data":data,"loc":{"start":{"line":5,"column":63},"end":{"line":5,"column":80}}}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});
templates['store'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item d-flex justify-content-between align-items-center px-5\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameUI") || (depth0 != null ? lookupProperty(depth0,"eNameUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameUI","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":19}}}) : helper)))
    + "\r\n        <span class=\"badge badge-primary badge-pill ml-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"countedTypes") || (depth0 != null ? lookupProperty(depth0,"countedTypes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"countedTypes","hash":{},"data":data,"loc":{"start":{"line":4,"column":58},"end":{"line":4,"column":74}}}) : helper)))
    + "</span>\r\n    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exportList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['tableConcreteBeam'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":19,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Laenge") || (depth0 != null ? lookupProperty(depth0,"Q_Laenge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Laenge","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":28}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":43}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Balken_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_07_Balken_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Balken_Typ","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":72},"end":{"line":27,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":27,"column":93},"end":{"line":27,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":68},"end":{"line":30,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":30,"column":89},"end":{"line":30,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":31,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteBlock'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Dicke") || (depth0 != null ? lookupProperty(depth0,"LV_08_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Dicke","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":31}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Schutzwirkung") || (depth0 != null ? lookupProperty(depth0,"LV_08_Schutzwirkung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Schutzwirkung","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":39}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">D-Stein</th>\r\n            <th scope=\"col\">Schutz</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteColumn'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":18,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Laenge") || (depth0 != null ? lookupProperty(depth0,"Q_Laenge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Laenge","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":32}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":52}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":47}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":76},"end":{"line":25,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":97},"end":{"line":25,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":72},"end":{"line":28,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":28,"column":93},"end":{"line":28,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Länge</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteColumnRound'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":43}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteGasBlock'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"thicknessMasonry") || (depth0 != null ? lookupProperty(depth0,"thicknessMasonry") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thicknessMasonry","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"cGasBlockStrength") || (depth0 != null ? lookupProperty(depth0,"cGasBlockStrength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cGasBlockStrength","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":37}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">D-Stein</th>\r\n            <th scope=\"col\">Festigkeit</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteInsulationWall'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":28},"end":{"line":15,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":72},"end":{"line":19,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":19,"column":93},"end":{"line":19,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":22,"column":68},"end":{"line":22,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":22,"column":89},"end":{"line":22,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteRoof'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteShaft'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteSlab'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":18,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":52}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":47}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Ausführung") || (depth0 != null ? lookupProperty(depth0,"LV_07_Ausführung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Ausführung","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":40}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":76},"end":{"line":25,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":97},"end":{"line":25,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":40}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":72},"end":{"line":27,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":27,"column":93},"end":{"line":27,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":28,"column":38}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Ausführung</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableConcreteWall'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":43}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_BruestungUI") || (depth0 != null ? lookupProperty(depth0,"LV_07_BruestungUI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_BruestungUI","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":37}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":72},"end":{"line":25,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":93},"end":{"line":25,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":68},"end":{"line":28,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":28,"column":89},"end":{"line":28,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":29,"column":20},"end":{"line":29,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Brüstung</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableDrywallPlaster'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke_WD") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke_WD") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke_WD","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":30}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Dicke WD</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableETICS'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":28},"end":{"line":22,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_44_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Typ","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":29}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Lambdawert") || (depth0 != null ? lookupProperty(depth0,"LV_44_Lambdawert") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Lambdawert","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Unterputzdicke") || (depth0 != null ? lookupProperty(depth0,"LV_44_Unterputzdicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Unterputzdicke","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":40}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_my10UI") || (depth0 != null ? lookupProperty(depth0,"LV_44_my10UI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_my10UI","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":32}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Oberputz") || (depth0 != null ? lookupProperty(depth0,"LV_44_Oberputz") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Oberputz","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":34}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Oberputzstruktur") || (depth0 != null ? lookupProperty(depth0,"LV_44_Oberputzstruktur") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Oberputzstruktur","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":42}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_44_Oberputzdicke") || (depth0 != null ? lookupProperty(depth0,"LV_44_Oberputzdicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_44_Oberputzdicke","hash":{},"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":31,"column":39}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":32,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":33,"column":72},"end":{"line":33,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":33,"column":93},"end":{"line":33,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":34,"column":20},"end":{"line":34,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":36,"column":68},"end":{"line":36,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":36,"column":89},"end":{"line":36,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Lambda</th>\r\n            <th scope=\"col\">UP-Dicke</th>\r\n            <th scope=\"col\">UP-my10</th>\r\n            <th scope=\"col\">Oberputz</th>\r\n            <th scope=\"col\">OP-Struktur</th>\r\n            <th scope=\"col\">OP-Dicke</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":40,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableFoundationHaunch'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Winkel") || (depth0 != null ? lookupProperty(depth0,"Q_Winkel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Winkel","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":28}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":43}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":72},"end":{"line":25,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":93},"end":{"line":25,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":68},"end":{"line":28,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":28,"column":89},"end":{"line":28,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":29,"column":20},"end":{"line":29,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Winkel</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableFoundationMonolithic'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Glätten_Hartstoffgemisch") || (depth0 != null ? lookupProperty(depth0,"LV_07_Glätten_Hartstoffgemisch") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Glätten_Hartstoffgemisch","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":54}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Verdunstungsschutz") || (depth0 != null ? lookupProperty(depth0,"LV_07_Verdunstungsschutz") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Verdunstungsschutz","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":48}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":76},"end":{"line":23,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":97},"end":{"line":23,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":24},"end":{"line":24,"column":40}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":72},"end":{"line":25,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":93},"end":{"line":25,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":38}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Glätten</th>\r\n            <th scope=\"col\">Verdunstungsschutz</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableFoundationSlab'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":52}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":47}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":76},"end":{"line":23,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":97},"end":{"line":23,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":24},"end":{"line":24,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":72},"end":{"line":26,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":93},"end":{"line":26,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":27,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMasonry'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":19,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Dicke") || (depth0 != null ? lookupProperty(depth0,"LV_08_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Dicke","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":31}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Schutzwirkung") || (depth0 != null ? lookupProperty(depth0,"LV_08_Schutzwirkung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Schutzwirkung","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":39}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Planziegel_UI") || (depth0 != null ? lookupProperty(depth0,"LV_08_Planziegel_UI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Planziegel_UI","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":39}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Betonstein_Ausführung") || (depth0 != null ? lookupProperty(depth0,"LV_08_Betonstein_Ausführung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Betonstein_Ausführung","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":47}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Porenbeton_Festigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_08_Porenbeton_Festigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Porenbeton_Festigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":54}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":72},"end":{"line":27,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":27,"column":93},"end":{"line":27,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":68},"end":{"line":30,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":30,"column":89},"end":{"line":30,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":31,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">D-Stein</th>\r\n            <th scope=\"col\">Schutz</th>\r\n            <th scope=\"col\">Plan</th>\r\n            <th scope=\"col\">BeST-Ausf.</th>\r\n            <th scope=\"col\">PoBe-FKL</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMasonryNonBearing'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Dicke") || (depth0 != null ? lookupProperty(depth0,"LV_08_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Dicke","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":31}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_08_Planziegel_UI") || (depth0 != null ? lookupProperty(depth0,"LV_08_Planziegel_UI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_08_Planziegel_UI","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":39}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">D-Stein</th>\r\n            <th scope=\"col\">Plan</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMetalStudCeiling'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":32},"end":{"line":19,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_39_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Typ","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":33}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":40}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Decke_Daemmung") || (depth0 != null ? lookupProperty(depth0,"LV_39_Decke_Daemmung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Decke_Daemmung","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":44}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Decke_Daemmung_Dicke") || (depth0 != null ? lookupProperty(depth0,"LV_39_Decke_Daemmung_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Decke_Daemmung_Dicke","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":50}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":76},"end":{"line":27,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":27,"column":97},"end":{"line":27,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":28,"column":40}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":72},"end":{"line":29,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":29,"column":93},"end":{"line":29,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":30,"column":24},"end":{"line":30,"column":38}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Beplankung</th>\r\n            <th scope=\"col\">Dämmung</th>\r\n            <th scope=\"col\">Dicke Dämmung</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMetalStudShell'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":32},"end":{"line":20,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_39_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Typ","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":33}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_CW_Profil") || (depth0 != null ? lookupProperty(depth0,"LV_39_CW_Profil") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_CW_Profil","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":39}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":40}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung_Spezial") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung_Spezial") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung_Spezial","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":48}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung_Spezial_Anzahl") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung_Spezial_Anzahl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung_Spezial_Anzahl","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":55}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":76},"end":{"line":29,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":29,"column":97},"end":{"line":29,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":30,"column":24},"end":{"line":30,"column":40}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":72},"end":{"line":31,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":31,"column":93},"end":{"line":31,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":32,"column":24},"end":{"line":32,"column":38}}}) : helper))) != null ? stack1 : "")
    + " </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">CW Profil</th>\r\n            <th scope=\"col\">Beplankung</th>\r\n            <th scope=\"col\">Spezial</th>\r\n            <th scope=\"col\">Anzahl</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMetalStudWall'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":28},"end":{"line":20,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_39_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Typ","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":29}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_CW_Profil") || (depth0 != null ? lookupProperty(depth0,"LV_39_CW_Profil") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_CW_Profil","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":35}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung_Spezial") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung_Spezial") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung_Spezial","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":44}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Beplankung_Spezial_Anzahl") || (depth0 != null ? lookupProperty(depth0,"LV_39_Beplankung_Spezial_Anzahl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Beplankung_Spezial_Anzahl","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":51}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":72},"end":{"line":29,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":29,"column":93},"end":{"line":29,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":30,"column":20},"end":{"line":30,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":68},"end":{"line":32,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":32,"column":89},"end":{"line":32,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":33,"column":20},"end":{"line":33,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">CW Profil</th>\r\n            <th scope=\"col\">Beplankung</th>\r\n            <th scope=\"col\">Spezial</th>\r\n            <th scope=\"col\">Anzahl</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":36,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableMetalStudWallCustom'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":32},"end":{"line":16,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_39_Typ_Frei") || (depth0 != null ? lookupProperty(depth0,"LV_39_Typ_Frei") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_39_Typ_Frei","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":38}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Kurztext") || (depth0 != null ? lookupProperty(depth0,"LV_Kurztext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Kurztext","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":76},"end":{"line":21,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":97},"end":{"line":21,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":72},"end":{"line":24,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":93},"end":{"line":24,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Kurztext</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePadFooting'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":32},"end":{"line":19,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Breite") || (depth0 != null ? lookupProperty(depth0,"Q_Breite") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Breite","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":32}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Laenge") || (depth0 != null ? lookupProperty(depth0,"Q_Laenge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Laenge","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":32}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":52}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":47}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":76},"end":{"line":27,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":27,"column":97},"end":{"line":27,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":28,"column":24},"end":{"line":28,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":72},"end":{"line":30,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":30,"column":93},"end":{"line":30,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":31,"column":24},"end":{"line":31,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Breite</th>\r\n            <th scope=\"col\">Länge</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePerimeterInsulation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_12_Typ_table") || (depth0 != null ? lookupProperty(depth0,"LV_12_Typ_table") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_12_Typ_table","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_12_Daemmung") || (depth0 != null ? lookupProperty(depth0,"LV_12_Daemmung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_12_Daemmung","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":34}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_12_Daemmungsdicke") || (depth0 != null ? lookupProperty(depth0,"LV_12_Daemmungsdicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_12_Daemmungsdicke","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":40}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_12_Abdichtung") || (depth0 != null ? lookupProperty(depth0,"LV_12_Abdichtung") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_12_Abdichtung","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":72},"end":{"line":25,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":25,"column":93},"end":{"line":25,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":68},"end":{"line":28,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":28,"column":89},"end":{"line":28,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":29,"column":20},"end":{"line":29,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Dämmung</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Abdichtung</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePileGrid'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":32},"end":{"line":16,"column":38}}}) : helper)))
    + "</th>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":28}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":31}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Laenge") || (depth0 != null ? lookupProperty(depth0,"Q_Laenge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Laenge","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":32}}}) : helper)))
    + "</td>\r\n                <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":39}}}) : helper)))
    + "</td>\r\n                <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":76},"end":{"line":21,"column":86}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":97},"end":{"line":21,"column":108}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n                <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":72},"end":{"line":24,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":93},"end":{"line":24,"column":104}}}) : helper)))
    + "\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </a></td>\r\n            </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePrefabColumn'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Laenge") || (depth0 != null ? lookupProperty(depth0,"Q_Laenge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Laenge","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":28}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Länge</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePrefabColumnRound'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":28},"end":{"line":15,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":72},"end":{"line":19,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":19,"column":93},"end":{"line":19,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":22,"column":68},"end":{"line":22,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":22,"column":89},"end":{"line":22,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePrefabElementSlab'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Nutzlast") || (depth0 != null ? lookupProperty(depth0,"LV_07_Nutzlast") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Nutzlast","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":34}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Nutzlast</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tablePrefabWall'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":28},"end":{"line":15,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":72},"end":{"line":19,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":19,"column":93},"end":{"line":19,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":22,"column":68},"end":{"line":22,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":22,"column":89},"end":{"line":22,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableSlabCustom'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Gewerk") || (depth0 != null ? lookupProperty(depth0,"LV_Gewerk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Gewerk","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":29}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Mengeneinheit") || (depth0 != null ? lookupProperty(depth0,"LV_Mengeneinheit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Mengeneinheit","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Kurztext") || (depth0 != null ? lookupProperty(depth0,"LV_Kurztext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Kurztext","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":31}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">LG</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">ME</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Kurztext</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableStripFooting'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Expositionsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Expositionsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Expositionsklasse","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":43}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">EK</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableSubconcrete'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":28},"end":{"line":16,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_Betonfestigkeitsklasse") || (depth0 != null ? lookupProperty(depth0,"LV_07_Betonfestigkeitsklasse") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_Betonfestigkeitsklasse","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":48}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":68},"end":{"line":24,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":24,"column":89},"end":{"line":24,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Höhe</th>\r\n            <th scope=\"col\">Betonfestigkeit</th>\r\n            <th scope=\"col\">Typ-Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableWallCustom'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Gewerk") || (depth0 != null ? lookupProperty(depth0,"LV_Gewerk") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Gewerk","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":29}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Mengeneinheit") || (depth0 != null ? lookupProperty(depth0,"LV_Mengeneinheit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Mengeneinheit","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":36}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Dicke") || (depth0 != null ? lookupProperty(depth0,"Q_Dicke") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Dicke","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_Kurztext") || (depth0 != null ? lookupProperty(depth0,"LV_Kurztext") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_Kurztext","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":31}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">ME</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Kurztext</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
templates['tableWoodWool'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":34}}}) : helper)))
    + "</th>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":24}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_KDD_Typ") || (depth0 != null ? lookupProperty(depth0,"LV_07_KDD_Typ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_KDD_Typ","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":33}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"LV_07_KDD_Produktart") || (depth0 != null ? lookupProperty(depth0,"LV_07_KDD_Produktart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LV_07_KDD_Produktart","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":40}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Q_Hoehe") || (depth0 != null ? lookupProperty(depth0,"Q_Hoehe") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Q_Hoehe","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":27}}}) : helper)))
    + "</td>\r\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"R_Typ_Kommentar") || (depth0 != null ? lookupProperty(depth0,"R_Typ_Kommentar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"R_Typ_Kommentar","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":35}}}) : helper)))
    + "</td>\r\n            <td><a href=\"#\" id=\"tr-delete\" class=\"tr-delete\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":72},"end":{"line":23,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":23,"column":93},"end":{"line":23,"column":104}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconDelete") || (depth0 != null ? lookupProperty(depth0,"iconDelete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconDelete","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n            <td><a href=\"#\" id=\"tr-edit\" class=\"tr-edit\" data-trID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":26,"column":89},"end":{"line":26,"column":100}}}) : helper)))
    + "\">\r\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"iconEdit") || (depth0 != null ? lookupProperty(depth0,"iconEdit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconEdit","hash":{},"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":34}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </a></td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tableStyle") || (depth0 != null ? lookupProperty(depth0,"tableStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableStyle","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":28}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"eNameJS") || (depth0 != null ? lookupProperty(depth0,"eNameJS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eNameJS","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <thead class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"theadStyle") || (depth0 != null ? lookupProperty(depth0,"theadStyle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theadStyle","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":32}}}) : helper)))
    + "\">\r\n        <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Typ</th>\r\n            <th scope=\"col\">Produktart</th>\r\n            <th scope=\"col\">Dicke</th>\r\n            <th scope=\"col\">Kommentar</th>\r\n            <th scope=\"col\">-</th>\r\n            <th scope=\"col\">-</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class=\"text-center align-middle\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"typesCollection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
})();