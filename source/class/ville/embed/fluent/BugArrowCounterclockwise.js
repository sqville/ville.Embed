/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BugArrowCounterclockwise",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1-.41-1.09A2.99 2.99 0 0 1 7 13V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.21c.33-.09.66-.15 1-.19V8h.5A2.5 2.5 0 0 0 17 5.5v-2ZM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.25a2.74 2.74 0 0 1-2.05-.92.5.5 0 1 1 .75-.66 1.75 1.75 0 1 0 .4-2.67h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.63V12a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1 1.5 5.05Z",
    FILLED : "M17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96A5.49 5.49 0 0 1 14 9.02V8h.5A2.5 2.5 0 0 0 17 5.5v-2ZM14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.25a2.74 2.74 0 0 1-2.05-.92.5.5 0 1 1 .75-.66 1.75 1.75 0 1 0 .4-2.67h.4a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.63V12a.5.5 0 0 1 1 0v.2a2.75 2.75 0 1 1 1.5 5.05Z"
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