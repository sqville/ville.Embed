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
 * The ScrollArea provides a container widget with on demand scroll bars
 * if the content size exceeds the size of the container.
 *
 * @childControl pane {ville.wax.scroll.ScrollPane} pane which holds the content to scroll
 * @childControl corner {qx.ui.core.Widget} corner where no scrollbar is shown
 */
 qx.Class.define("wax.demo.scroll.AbstractScrollArea",
 {
   extend : qx.ui.core.Widget,
   type : "abstract",
 
 
   /*
   *****************************************************************************
      STATICS
   *****************************************************************************
   */
 
   statics :
   {
     /**
      * The default width which is used for the width of the scroll bar if
      * overlaid.
      */
     DEFAULT_SCROLLBAR_WIDTH : 14
   },
 
 
 
   /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */
 
   construct : function()
   {
     this.base(arguments);
 
     if (qx.core.Environment.get("os.scrollBarOverlayed")) {
       // use a plain canvas to overlay the scroll bars
       this._setLayout(new qx.ui.layout.Canvas());
     } else {
       // Create 'fixed' grid layout
       var grid = new qx.ui.layout.Grid();
       grid.setColumnFlex(0, 1);
       grid.setRowFlex(0, 1);
       this._setLayout(grid);
     }
 
     // since the scroll container disregards the min size of the scrollbars
     // we have to set the min size of the scroll area to ensure that the
     // scrollbars always have an usable size.
     var size = wax.demo.scroll.AbstractScrollArea.DEFAULT_SCROLLBAR_WIDTH * 2 + 14;
     this.set({minHeight: size, minWidth: size});
 
   }, 
 
   /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */
 
   properties :
   {
     // overridden
     appearance :
     {
       refine : true,
       init : "scrollarea"
     },

    /**
    * Whether the widget should have horizontal scrollbars.
    */
    overflowX :
    {
      check : ["hidden", "visible", "scroll", "auto"],
      nullable : true,
      apply : "_applyOverflowX"
    },

    /**
    * Whether the widget should have vertical scrollbars.
    */
    overflowY :
    {
      check : ["hidden", "visible", "scroll", "auto"],
      nullable : true,
      apply : "_applyOverflowY"
    },

    /**
    * Overflow group property
    */
    overflow : {
      group : [ "overflowX", "overflowY" ]
    }

   },
 
 
 
   /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */
 
   members :
   {
     /*
     ---------------------------------------------------------------------------
       CHILD CONTROL SUPPORT
     ---------------------------------------------------------------------------
     */
 
     // overridden
     _createChildControlImpl : function(id, hash)
     {
       var control;
 
       switch(id)
       {
         case "pane":
           //control = new qx.ui.core.scroll.ScrollPane();
           control = new wax.demo.scroll.ScrollPane();
 
           if (qx.core.Environment.get("os.scrollBarOverlayed")) {
             this._add(control, {edge: 0});
           } else {
             this._add(control, {row: 0, column: 0});
           }
           break;
 
         case "corner":
           control = new qx.ui.core.Widget();
           control.setWidth(0);
           control.setHeight(0);
           control.exclude();
 
           if (!qx.core.Environment.get("os.scrollBarOverlayed")) {
             // only add for non overlayed scroll bars
             this._add(control, {row: 1, column: 1});
           }
           break;
       }
 
       return control || this.base(arguments, id);
     },
 
 
     /*
     ---------------------------------------------------------------------------
       PANE SIZE
     ---------------------------------------------------------------------------
     */
 
     /**
      * Returns the dimensions of the pane.
      *
      * @return {Map|null} The pane dimension in pixel. Contains
      *    the keys <code>width</code> and <code>height</code>.
      */
     getPaneSize : function() {
       return this.getChildControl("pane").getInnerSize();
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
     getItemTop : function(item) {
       return this.getChildControl("pane").getItemTop(item);
     },
 
 
     /**
      * Returns the top offset of the end of the given item in relation to the
      * inner height of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Top offset
      */
     getItemBottom : function(item) {
       return this.getChildControl("pane").getItemBottom(item);
     },
 
 
     /**
      * Returns the left offset of the given item in relation to the
      * inner width of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Top offset
      */
     getItemLeft : function(item) {
       return this.getChildControl("pane").getItemLeft(item);
     },
 
 
     /**
      * Returns the left offset of the end of the given item in relation to the
      * inner width of this widget.
      *
      * @param item {qx.ui.core.Widget} Item to query
      * @return {Integer} Right offset
      */
     getItemRight : function(item) {
       return this.getChildControl("pane").getItemRight(item);
     },
 
     /*
     ---------------------------------------------------------------------------
       SCROLL SUPPORT
     ---------------------------------------------------------------------------
     */
    
     // property apply
     _applyOverflowX : function(value) {
      this.getChildControl("pane").setOverflowX(value);
    },


    // property apply
    _applyOverflowY : function(value) {
      this.getChildControl("pane").setOverflowY(value);
    }
 
   }
 });
 