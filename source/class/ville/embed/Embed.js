/* ************************************************************************

   Ville Software (SQville)

   Copyright:

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville)

************************************************************************ */

/**
 * The label class brings typical text content to the widget system.
 *
 * It supports simple text nodes and complex HTML (rich). The default
 * content mode is for text only. The mode is changeable through the property
 * {@link #rich}.
 *
 * The label supports heightForWidth when used in HTML mode. This means
 * that multi line HTML automatically computes the correct preferred height.
 *
 * *Example*
 *
 * Here is a little example of how to use the widget.
 *
 * <pre class='javascript'>
 *   // a simple text label without wrapping and markup support
 *   var label1 = new qx.ui.basic.Label("Simple text label");
 *   this.getRoot().add(label1, {left:20, top:10});
 *
 *   // a HTML label with automatic line wrapping
 *   var label2 = new qx.ui.basic.Label().set({
 *     value: "A <b>long label</b> text with auto-wrapping. This also may contain <b style='color:red'>rich HTML</b> markup.",
 *     rich : true,
 *     width: 120
 *   });
 *   this.getRoot().add(label2, {left:20, top:50});
 * </pre>
 *
 * The first label in this example is a basic text only label. As such no
 * automatic wrapping is supported. The second label is a long label containing
 * HTML markup with automatic line wrapping.
 *
 * *External Documentation*
 *
 * <a href='http://qooxdoo.org/docs/#desktop/widget/label.md' target='_blank'>
 * Documentation of this widget in the qooxdoo manual.</a>
 *
 * NOTE: Instances of this class must be disposed of after use
 *
 */
qx.Class.define("ville.embed.Embed",
{
  extend : qx.ui.core.Widget,
  implement : [qx.ui.form.IStringForm],

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param value {String} HTML, SVG or JSON content to use
   * 
   */
  construct : function(value)
  {
    this.base(arguments);

    if (value != null) {
      //Load manager
      if (!this.__embedmanager) {
        this.__embedmanager = ville.embed.Manager.getInstance();
      }
      var valtype = typeof value;
      if (valtype == "string") {
        if (qx.lang.String.startsWith(value, "data:text/html;") || qx.lang.String.startsWith(value, "data:text/svg+xml;") || qx.lang.String.startsWith(value, "data:text/json;")) {
          var dataformat = value.substring(value.indexOf("/")+1, value.indexOf(";"));
          if (dataformat == "json") {
            var mapsrc = qx.lang.Json.parse(value.substr(value.indexOf(";")+1));
            // TODO: map API json to object properties
            this.set(mapsrc);
            //render value
            this.render(mapsrc);
          } else {
            this.setValue(value.substr(value.indexOf(";")+1));
          }
      } 
        else if (qx.lang.String.startsWith(value, "{") && qx.lang.String.endsWith(value, "}")) {
            var mapsrc = qx.lang.Json.parse(value);
            // TODO:: map API json to object properties
            this.set(mapsrc);
        } else {
            this.setValue(value);
        }
      } else {
        // TODO:: map API json to object properties  
        this.set(value);
        //render value
        this.render(value);
      }
      // Apply any starter animation
      if (this.getAnimation()) {
        this.addListener("appear", function(e) {
          qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), this.__embedmanager.animations[this.getAnimation()], undefined);
        }, this);
      }
    }
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    animation :
    {
      check : "String",
      apply : "_applyAnimation",
      event : "changeAnimation",
      init : null,
      nullable : true,
      themeable : true
    },
    
    /** Name of icon or graphic to use
     * 
     */
    name :
    {
      check : "String",
      apply : "_applyName",
      event : "changeName",
      init : null,
      nullable : true,
      themeable : true
    },

    /** Name of template used by named embed  
     * 
     */
    templateName :
    {
      check : "String",
      init : null,
      nullable : true,
      themeable : true
    },
    
    /**
     * Switches between rich HTML and text content. The text mode (<code>false</code>) supports
     * advanced features like ellipsis when the available space is not
     * enough. HTML mode (<code>true</code>) supports multi-line content and all the
     * markup features of HTML content.
     */
    rich :
    {
      check : "Boolean",
      init : true,
      event : "changeRich",
      apply : "_applyRich"
    },

    /**
     * Contains the HTML or text content. Interpretation depends on the value
     * of {@link #rich}. In text mode entities and other HTML special content
     * is not supported. But it is possible to use unicode escape sequences
     * to insert symbols and other non ASCII characters.
     */
    value :
    {
      check : "String",
      apply : "_applyValue",
      event : "changeValue",
      nullable : true,
      themeable : true
    },

    /** Font size of the widget */
    size :
    {
        check : "Integer",
        init : null,
        nullable : true
    },
    
    
    /**
     * The tag to use for this element
     */
    cssClass :
    {
        check : "String",
        init : "",
        nullable : true,
        themeable : true,
        apply : "_applyCssClass"
    },

    /**
     * The color of the rendered icon/image.
     */
    color :
    {
        nullable : true,
        check : "Color",
        apply : "_applyColor",
        event : "changeColor",
        themeable : true,
        inheritable : true
    },

    /** Color of the svg fill property */
    fill :
    {
      check : "Color",
      nullable : true,
      themeable : true,
      apply : "_applyFill",
      event : "changeFill"
    }
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __invalidContentSize : null,
    __embedmanager : null,
    __embeds : {},
    __templates : {},
    __content : {},
    __animations : {},
    __css : {},


    // overridden
    _getContentHint : function()
    {
      if (this.__invalidContentSize)
      {
        this.__contentSize = this.__computeContentSize();
        delete this.__invalidContentSize;
      }

      return {
        width : this.__contentSize.width,
        height : this.__contentSize.height
      };
    },


    // overridden
    _hasHeightForWidth : function() {
      return this.getRich();
    },

    // overridden
    _getContentHeightForWidth : function(width)
    {
      if (!this.getRich()) {
        return null;
      }
      return this.__computeContentSize(width).height;
    },


    // overridden
    _createContentElement : function() {
        var element = new qx.html.Label;
        element.setRich(true);
        return element;
    },

    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    render : function(usercontent)
    {
      var contenttype = typeof usercontent;
      var name = this.getName();
      var templatename = this.getTemplateName();
      var embeddedcontent = this.__embedmanager.embeds[name];
      var template = this.__embedmanager.templates[templatename];
      //if the embed indicates a content entry then merge the content with the embed entries; content overrides matching fields
      if (this.__embedmanager.embeds[this.getName()].content)
        embeddedcontent = qx.lang.Object.mergeWith(embeddedcontent, this.__embedmanager.content[this.__embedmanager.embeds[this.getName()].content]);
      if (contenttype == "string")
        embeddedcontent = qx.lang.Object.mergeWith(embeddedcontent, this.__embedmanager.content[content]);
      else
        embeddedcontent = qx.lang.Object.mergeWith(usercontent, embeddedcontent);
      
        //check document for template tags
      if (name && templatename && !template) {
        var tempelement = document.getElementById(templatename);
        if (tempelement) {
          template = tempelement.innerHTML;
        }
        else {
          //template = "<small>" + templatename + " is missing a template entry</small>";
          //throw new Error(templatename + " is missing a TEMPLATE entry in its package class, or a <template id='"+templatename+"'></template> tag in your projects index.html file.");
          console.log(templatename + " is missing a TEMPLATE entry in its package class, or a <template id='"+templatename+"'></template> tag in your projects index.html file.");
          template = "";
        }
      }
      this.setValue(qx.bom.Template.render(template, embeddedcontent));
    },

     /*
    ---------------------------------------------------------------------------
      PROPERTY APPLIERS
    ---------------------------------------------------------------------------
    */

    // property apply
    _applyAnimation : function(value, old)
    {
      if (value) {
        if (this.getContentElement().getDomElement())
          qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), this.__embedmanager.animations[value], undefined);
      }
    },

    // property apply
    _applyName : function(value, old)
    {
      //console.log(value);
      this.setTemplateName(this.__embedmanager.embeds[value].template);
    },

    // property apply
    _applyRich : function(value)
    {
      // Sync with content element
      this.getContentElement().setRich(value);

      // Mark text size cache as invalid
      this.__invalidContentSize = true;

      // Update layout
      qx.ui.core.queue.Layout.add(this);
    },

    // property apply
    _applyValue : function(value, old)
      {
        // Sync with content element
        if (value) {
          this.getContentElement().setValue(value);
          //console.log(value);
        }

        // Mark text size cache as invalid
        this.__invalidContentSize = true;

        // Update layout
        qx.ui.core.queue.Layout.add(this);
      },

    _applyFill : function(value, old)
    {
      if (value) {
        this.getContentElement().setStyle("color", qx.theme.manager.Color.getInstance().resolve(value));
      }
    },
    
    // property apply
    _applyCssClass : function (value, old) {
      this.getContentElement().removeClass(old);
      this.getContentElement().addClass(value);
    },

    // property apply
    _applyColor : function(value, old) {
        this.getContentElement().setStyle("color", value||"");
    },


    /*
    ---------------------------------------------------------------------------
      LABEL ADDONS
    ---------------------------------------------------------------------------
    */

    /**
     * @type {Map} Internal fallback of label size when no font is defined
     *
     * @lint ignoreReferenceField(__contentSize)
     */
    __contentSize :
    {
      width : 0,
      height : 0
    },


    /**
     * Internal utility to compute the content dimensions.
     *
     * @param width {Integer?null} Optional width constraint
     * @return {Map} Map with <code>width</code> and <code>height</code> keys
     */
    __computeContentSize : function(width)
    {
      var Label = qx.bom.Label;
      //var font = this.getFont();

      //var styles = font ? this.__font.getStyles() : qx.bom.Font.getDefaultStyles();
      var styles = {};
      var content = this.getValue() || "A";
      var rich = this.getRich();

      return rich ?
        Label.getHtmlSize(content, styles, width) :
        Label.getTextSize(content, styles);
    }
  },



  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
   /*
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
    }
    */
  }
});
