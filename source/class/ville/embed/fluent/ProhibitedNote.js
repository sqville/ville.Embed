/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ProhibitedNote",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 10v.17a3 3 0 0 0-1-.17c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A6.97 6.97 0 0 0 9 16.93V17a3 3 0 0 0 .16.96A8 8 0 1 1 18 10ZM4.7 14.58l9.88-9.87a7 7 0 0 0-9.87 9.87ZM12 11a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-5Zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1Zm-.5-2.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    FILLED : "M18 10.17A8.02 8.02 0 0 0 10 2a8 8 0 0 0-.84 15.96A3 3 0 0 1 9 17v-.58a6.47 6.47 0 0 1-3.04-1.32l1.57-1.57 7.57-7.57A6.47 6.47 0 0 1 16.5 10h.5a3 3 0 0 1 1 .17ZM14.04 4.9 4.9 14.04a6.5 6.5 0 0 1 9.13-9.13ZM10 13c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
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