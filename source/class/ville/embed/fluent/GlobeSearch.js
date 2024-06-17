/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobeSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.05 9.11a8 8 0 1 1 9.72 8.7 1.5 1.5 0 0 0-.2-1.87l-.02-.01c.16-.24.32-.52.47-.84.22-.46.4-1 .56-1.59H9.74c.12-.32.2-.65.23-1h2.82a14.86 14.86 0 0 0 0-5H7.21l-.05.31c-.31-.12-.64-.2-.98-.26l.01-.05H3.46l-.2.6c-.46.26-.87.6-1.21 1.01Zm9.97-4.2C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45Zm9.67 7h-2.45c-.17.74-.4 1.42-.68 2.01-.19.4-.4.78-.64 1.1a7.02 7.02 0 0 0 3.77-3.11Zm-2.25-1h2.73a6.98 6.98 0 0 0 0-5h-2.73a15.97 15.97 0 0 1 0 5Zm2.25-6a7.02 7.02 0 0 0-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM8.3 14.1a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.1ZM8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    FILLED : "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm5.05 1.52a7.18 7.18 0 0 0-.83-1.52A8.02 8.02 0 0 1 17.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7Zm4.66 3.7h-3.75a20.54 20.54 0 0 1 0 5h3.75a7.99 7.99 0 0 0 0-5Zm-3.9 6h3.5a8.02 8.02 0 0 1-5.09 4.22c.31-.43.59-.94.83-1.52.32-.78.58-1.7.76-2.7Zm-4.14.44c.07-.14.13-.29.18-.44h2.94a12.22 12.22 0 0 1-.87 2.77 1.5 1.5 0 0 0-.25-.33l-2-2Zm.41-1.44h2.87a19.44 19.44 0 0 0 0-5H7.16l-.04.3a4.5 4.5 0 0 1 2.85 4.7Zm-3.82-5v.05a4.54 4.54 0 0 0-.65-.05h.65Zm-3.75 0h3.1c-1.39 0-2.63.63-3.45 1.61.06-.55.18-1.1.35-1.61Zm3.1 8c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 14.1a3.5 3.5 0 1 0-2.8 1.4Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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