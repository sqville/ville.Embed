/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FoodPizza",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.72 1.26a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 3.96c0-1.1.9-2.03 2.03-1.96 4.45.28 8.35 1.77 11.4 4.7.87.82.7 2.17-.2 2.86-1.24.95-3.12 2.4-4.23 3.2v1.74c0 .72-.55 1.5-1.5 1.5-.18 0-.34-.03-.5-.08v.09c0 .7-.55 1.49-1.5 1.49-.75 0-1.25-.5-1.42-1.05L6.4 17.7A1.5 1.5 0 0 1 4 16.5V3.96Zm7 10.54c0 .26.2.5.5.5s.5-.24.5-.5v-2a.5.5 0 0 1 .21-.4c.78-.56 2.1-1.57 3.28-2.47A15.43 15.43 0 0 0 5 5.51V16.5c0 .41.47.64.8.4l2.4-1.8a.5.5 0 0 1 .8.4v.5c0 .25.2.5.5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0Zm5.62-5.73c.46-.36.5-1 .12-1.36-2.86-2.72-6.52-4.15-10.77-4.4a.93.93 0 0 0-.97.95v.55c4.33.04 8.4 1.7 11.3 4.5l.32-.24Z",
    FILLED : "M4 3.96c0-1.1.9-2.03 2.03-1.96 4.45.28 8.35 1.77 11.4 4.7.87.82.7 2.17-.2 2.86l-.25.19-.4-.44V9.3A16.37 16.37 0 0 0 4.88 4.5H4v-.55ZM4 5.5V16.5a1.5 1.5 0 0 0 2.4 1.2L8 16.5a1 1 0 0 0 2 0v-2a.5.5 0 0 1 1-.06V15a1 1 0 0 0 2 0v-2.24c.82-.6 2.09-1.56 3.19-2.4l-.33-.37A15.37 15.37 0 0 0 4.87 5.5H4Zm4.25 2.74a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.97 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.96 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});