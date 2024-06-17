/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpatulaSpoon",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.09 3.3a1 1 0 0 0-1.42 0L2.3 5.66a1 1 0 0 0 0 1.42L4.91 9.7a1 1 0 0 0 .71.29h1.63c.44 0 .86.2 1.15.54l5.05 6.03a1.5 1.5 0 0 0 2.12-2.12L9.54 9.4A1.5 1.5 0 0 1 9 8.25V6.62a1 1 0 0 0-.3-.7L6.1 3.28Zm-2.13-.71a2 2 0 0 1 2.83 0L9.41 5.2A2 2 0 0 1 10 6.62v1.63c0 .12.04.23.12.32l.64-.59c.37-.33.55-.88.64-1.51a6.53 6.53 0 0 1 1.63-3.44 3.5 3.5 0 1 1 4.95 4.94 6.53 6.53 0 0 1-3.45 1.63c-.63.09-1.18.27-1.52.64l-.4.43 3.64 3.05.02.01a2.5 2.5 0 1 1-3.54 3.54l-.01-.02-2.94-3.5-3.36 3.66a2 2 0 0 1-2.83-2.82v-.01l3.85-3.54a.5.5 0 0 0-.2-.04H5.63a2 2 0 0 1-1.41-.59L1.59 7.8a2 2 0 0 1 0-2.83L3.96 2.6Zm7.89 7.44.43-.46a3.45 3.45 0 0 1 2.12-.96 5.54 5.54 0 0 0 2.87-1.34 2.5 2.5 0 0 0-3.54-3.54c-.6.6-1.19 1.79-1.34 2.87-.1.7-.33 1.54-.95 2.12l-.55.5.96.81Zm-3.73 1.74L4.3 15.3A1 1 0 0 0 5.7 16.7l3.44-3.73-1.02-1.21ZM4.35 6.15a.5.5 0 1 0-.7.7L5.4 8.6a.5.5 0 1 0 .7-.7L4.35 6.15Zm.8-1.5c.2-.2.5-.2.7 0L7.6 6.4a.5.5 0 1 1-.7.7L5.15 5.35a.5.5 0 0 1 0-.7ZM14 6a.5.5 0 0 0-1 0c0 1.1.9 2 2 2a.5.5 0 0 0 0-1 1 1 0 0 1-1-1Z",
    FILLED : "m6.4 12-2.8 2.58h-.01a2 2 0 0 0 2.82 2.83h.01l2.68-2.92L7.01 12H6.4Zm6.94-2.03c.32-.2.73-.3 1.2-.37a6.53 6.53 0 0 0 3.44-1.63 3.5 3.5 0 1 0-4.95-4.94 6.53 6.53 0 0 0-1.63 3.44c-.06.47-.19.9-.4 1.23V8l2.34 1.96Zm.16-4.47c.28 0 .5.22.5.5a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 2 2 0 0 1-2-2c0-.28.22-.5.5-.5ZM3.96 2.59a2 2 0 0 1 2.83 0L9.41 5.2A2 2 0 0 1 10 6.62v1.63c0 .14.07.28.18.38l6.07 5.09.02.01a2.5 2.5 0 1 1-3.54 3.54l-.01-.02-5.09-6.07a.5.5 0 0 0-.38-.18H5.62a2 2 0 0 1-1.41-.59L1.59 7.8a2 2 0 0 1 0-2.83L3.96 2.6ZM3.4 6.15a.5.5 0 0 0 0 .7l2 2a.5.5 0 1 0 .7-.7l-2-2a.5.5 0 0 0-.7 0ZM5.85 4.4a.5.5 0 1 0-.7.7l2 2a.5.5 0 1 0 .7-.7l-2-2Z"
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