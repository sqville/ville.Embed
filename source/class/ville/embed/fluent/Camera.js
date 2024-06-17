/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Camera",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.12-8a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12Zm-.44 1.28A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v8c0 .83-.68 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5v-8C3 5.67 3.67 5 4.5 5h2a.5.5 0 0 0 .44-.28l.73-1.44Z",
    FILLED : "M7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-.22-7.17c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0 1 18 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.68l.6-1.17ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
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