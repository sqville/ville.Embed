/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * This class represents a scroll able pane. This means that this widget
 * may contain content which is bigger than the available (inner)
 * dimensions of this widget. The widget also offer methods to control
 * the scrolling position. It can only have exactly one child.
 */
 qx.Class.define("wax.demo.scroll.ScrollPane",
 {
   extend : qx.ui.core.Widget,

   include : [qx.ui.core.MNativeOverflow],
 
   /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */
 
   construct : function()
   {
     this.base(arguments);
 
     this.set({
       minWidth: 0,
       minHeight: 0
     });
 
     // Automatically configure a "fixed" grow layout.
     this._setLayout(new qx.ui.layout.Grow());
 
     // Add resize listener to "translate" event
     this.addListener("resize", this._onUpdate);

     //var contentEl = this.getContentElement();

     // scroll position test
     //contentEl.addListener("scroll", function(){
     // console.log(contentEl.getScrollX());
      //this.setScrollX(contentEl.getScrollX());
      //this.setScrollY(contentEl.getScrollY());
     //});

     this.setOverflow("auto", "auto");
   },
 

 
   /*
   *****************************************************************************
      EVENTS
   *****************************************************************************
   */
 
   events :
   {
     /** Fired on resize of both the container or the content. */
     update : "qx.event.type.Event"
   },
 
 
   /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */
 
   members :
   {
     __frame : null,
 
 
     /*
     ---------------------------------------------------------------------------
       CONTENT MANAGEMENT
     ---------------------------------------------------------------------------
     */
 
     /**
      * Configures the content of the scroll pane. Replaces any existing child
      * with the newly given one.
      *
      * @param widget {qx.ui.core.Widget?null} The content widget of the pane
      */
     add : function(widget)
     {
       var old = this._getChildren()[0];
       if (old)
       {
         this._remove(old);
         old.removeListener("resize", this._onUpdate, this);
       }
 
       if (widget)
       {
         this._add(widget);
         widget.addListener("resize", this._onUpdate, this);
       }
     },
 
 
     /**
      * Removes the given widget from the content. The pane is empty
      * afterwards as only one child is supported by the pane.
      *
      * @param widget {qx.ui.core.Widget?null} The content widget of the pane
      */
     remove : function(widget)
     {
       if (widget)
       {
         this._remove(widget);
         widget.removeListener("resize", this._onUpdate, this);
       }
     },
 
 
     /**
      * Returns an array containing the current content.
      *
      * @return {Object[]} The content array
      */
     getChildren : function() {
       return this._getChildren();
     },
 
 
 
     /*
     ---------------------------------------------------------------------------
       EVENT LISTENER
     ---------------------------------------------------------------------------
     */
 
     /**
      * Event listener for resize event of content and container
      *
      * @param e {Event} Resize event object
      */
     _onUpdate : function(e) {
       this.fireEvent("update");
     },
 
 
     /*
     ---------------------------------------------------------------------------
       ITEM LOCATION SUPPORT
     ---------------------------------------------------------------------------
     */
 
     /**
      * Returns the top offset of the given item in relation to the
      * inner height of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Top offset
      */
     getItemTop : function(item)
     {
       var top = 0;
 
       do
       {
         top += item.getBounds().top;
         item = item.getLayoutParent();
       }
       while (item && item !== this);
 
       return top;
     },
 
 
     /**
      * Returns the top offset of the end of the given item in relation to the
      * inner height of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Top offset
      */
     getItemBottom : function(item) {
       return this.getItemTop(item) + item.getBounds().height;
     },
 
 
     /**
      * Returns the left offset of the given item in relation to the
      * inner width of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Top offset
      */
     getItemLeft : function(item)
     {
       var left = 0;
       var parent;
 
       do
       {
         left += item.getBounds().left;
         parent = item.getLayoutParent();
         if (parent) {
           left += parent.getInsets().left;
         }
         item = parent;
       }
       while (item && item !== this);
 
       return left;
     },
 
 
     /**
      * Returns the left offset of the end of the given item in relation to the
      * inner width of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Right offset
      */
     getItemRight : function(item) {
       return this.getItemLeft(item) + item.getBounds().width;
     }
  
   }
 });
 