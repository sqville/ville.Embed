/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookStar",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-4.55 1.29a.5.5 0 0 0-.9 0l-.83 1.77-1.93.23a.5.5 0 0 0-.28.87l1.43 1.33-.38 1.91a.5.5 0 0 0 .73.53l1.71-.95 1.7.95a.5.5 0 0 0 .74-.53l-.38-1.91 1.43-1.33a.5.5 0 0 0-.28-.87l-1.93-.23-.83-1.77Zm-.94 2.44L10 6.7l.49 1.04a.5.5 0 0 0 .39.29l1.14.14-.84.78a.5.5 0 0 0-.15.46l.22 1.14-1-.56a.5.5 0 0 0-.5 0l-1 .56.22-1.14a.5.5 0 0 0-.15-.46l-.84-.78 1.14-.14a.5.5 0 0 0 .4-.29Z",
    FILLED : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6.45 1.29a.5.5 0 0 0-.9 0l-.83 1.77-1.93.23a.5.5 0 0 0-.28.87l1.43 1.33-.38 1.91a.5.5 0 0 0 .73.53l1.71-.95 1.7.95a.5.5 0 0 0 .74-.53l-.38-1.91 1.43-1.33a.5.5 0 0 0-.28-.87l-1.93-.23-.83-1.77Zm-.94 2.44L10 6.7l.49 1.04a.5.5 0 0 0 .39.29l1.14.14-.84.78a.5.5 0 0 0-.15.46l.22 1.14-1-.56a.5.5 0 0 0-.5 0l-1 .56.22-1.14a.5.5 0 0 0-.15-.46l-.84-.78 1.14-.14a.5.5 0 0 0 .4-.29Z"
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