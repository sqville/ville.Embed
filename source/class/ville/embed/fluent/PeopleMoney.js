/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleMoney",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10 10a2 2 0 0 1 .7.13c-.48.16-.9.47-1.2.87h-6a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.14 2.25-.37v1.06c-.61.2-1.36.31-2.25.31-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10Zm3-3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM10 12.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5ZM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5ZM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    FILLED : "M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM9 12.5c0-1.1.71-2.04 1.7-2.37A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.9 0 1.64-.12 2.26-.31L9 15.5v-3Zm8-6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-7 6c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5ZM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5ZM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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