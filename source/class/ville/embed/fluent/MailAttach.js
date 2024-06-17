/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailAttach",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m10.77 10.47-.77.45L3 6.8v-.3C3 5.67 3.67 5 4.5 5h7.38l1-1H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9.12l-1 1v4.38c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l.83-.49c-.17-.3-.28-.63-.31-.97Zm4.46-6a1.62 1.62 0 0 1 2.3 2.3l-.02.01-3.85 3.85h-.01a.56.56 0 1 1-.78-.8l3.48-3.48a.5.5 0 1 0-.7-.7l-3.5 3.49-.02.02a1.56 1.56 0 0 0 2.21 2.2l.01-.01 3.88-3.87.01-.01a2.63 2.63 0 0 0-3.72-3.7l-3.57 3.57a.5.5 0 0 0 .7.7l3.58-3.56Z",
    FILLED : "M10.3 8.7c.2.2.44.32.7.39-.21.43-.29.91-.23 1.38l-.77.45-7.98-4.7A2.5 2.5 0 0 1 4.5 4h8.37L10.3 6.58a1.5 1.5 0 0 0 0 2.12Zm.78 2.74a2.57 2.57 0 0 0 4.04.55L18 9.12v5.38a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l.83-.49Zm4.15-6.96a1.62 1.62 0 0 1 2.3 2.3h-.02l-3.85 3.85h-.01a.56.56 0 1 1-.78-.8l3.48-3.48a.5.5 0 1 0-.7-.7l-3.5 3.49-.02.02a1.56 1.56 0 0 0 2.21 2.2l.01-.01 3.88-3.87.01-.01a2.63 2.63 0 0 0-3.72-3.7l-3.57 3.57a.5.5 0 0 0 .7.7l3.58-3.56Z"
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