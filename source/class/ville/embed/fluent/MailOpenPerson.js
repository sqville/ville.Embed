/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailOpenPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3.08 3.49 7 3.47 7 10 10.92 16.53 7 10 3.08ZM9.98 12a.5.5 0 0 1-.24-.07L3 7.88v5.62c0 .83.67 1.5 1.5 1.5h7c-.22.3-.38.63-.45 1H4.5A2.5 2.5 0 0 1 2 13.5V7.85a2 2 0 0 1 .97-1.72l6.76-4.05a.5.5 0 0 1 .53 0l6.93 4.15a.9.9 0 0 1 0 1.54l-2.1 1.26a3 3 0 0 0-2.02 1.21l-2.81 1.69a.5.5 0 0 1-.28.07Zm7.52 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M9.74 2.07a.5.5 0 0 1 .52 0l6.77 4.06a2 2 0 0 1 .7.71L10 10.94l-7.73-4.1a2 2 0 0 1 .7-.7l6.77-4.07Zm3.14 8.47-2.65 1.4a.5.5 0 0 1-.46 0L2 7.83v5.67A2.5 2.5 0 0 0 4.5 16h6.55a2.5 2.5 0 0 1 2.22-1.99 2.99 2.99 0 0 1-.4-3.47ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
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