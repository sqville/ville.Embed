/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2021 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.embed.EmbedBase",
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
   construct ()
   {
     super();
   },
 
   /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */
 
   properties :
   {     
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
 
     /** template used by named embed  
      * 
      */
     template :
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
      nullable : true,
      apply : "_applySize"
     },
 
     /** Control the text alignment */
     iconAlign :
     {
       check : ["left", "center", "right", "justify"],
       nullable : true,
       themeable : true,
       apply : "_applyIconAlign",
       event : "changeIconAlign"
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
     __content : {},
 
 
     // overridden
     _getContentHint ()
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
     _hasHeightForWidth () 
     {
       return this.getRich();
     },
 
     // overridden
     _getContentHeightForWidth (width)
     {
       if (!this.getRich()) {
         return null;
       }
       return this.__computeContentSize(width).height;
     },
 
 
     // overridden
     _createContentElement () 
     {
         var element = new qx.html.Label;
         element.setRich(true);
         return element;
     },
 
      /*
     ---------------------------------------------------------------------------
       PROPERTY APPLIERS
     ---------------------------------------------------------------------------
     */
 
     // property apply
     _applyIconAlign (value, old) 
     {
       this.getContentElement().setStyle("textAlign", value);
     },
 
     // property apply
     _applyRich (value)
     {
       // Sync with content element
       this.getContentElement().setRich(value);
 
       // Mark text size cache as invalid
       this.__invalidContentSize = true;
 
       // Update layout
       qx.ui.core.queue.Layout.add(this);
     },
 
     // property apply
     _applyValue (value, old)
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
 
     _applyFill (value, old)
     {
       if (value) {
         this.getContentElement().setStyle("color", qx.theme.manager.Color.getInstance().resolve(value));
       }
     },
     
     // property apply
     _applyCssClass (value, old) {
       this.getContentElement().removeClass(old);
       this.getContentElement().addClass(value);
     },
 
     // property apply
     _applyColor (value, old) {
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
     __computeContentSize (width)
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
 
   destruct ()
   {
    /*
     if (qx.core.Environment.get("qx.dynlocale")) {
       qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
     }
     */
   }
 });