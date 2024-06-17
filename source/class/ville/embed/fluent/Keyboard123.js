/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Keyboard123",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.88 3.6c.38-.44.76-.58 1.05-.6.3-.01.58.1.78.3.2.19.3.43.28.63-.01.2-.12.44-.49.65a5.8 5.8 0 0 0-2.2 1.93 2.25 2.25 0 0 0-.3.92v.12a.5.5 0 0 0 .5.45h3a.5.5 0 0 0 0-1H5.18C5.4 6.64 5.9 6.1 7 5.45c.62-.36.95-.88.99-1.45a1.84 1.84 0 0 0-.59-1.43c-.38-.36-.92-.6-1.52-.57-.61.04-1.22.34-1.76.95a.5.5 0 1 0 .76.65ZM2.76 2.07c.15.1.24.26.24.43v5a.5.5 0 0 1-1 0V3.3l-.78.4a.5.5 0 0 1-.45-.9l1.5-.75a.5.5 0 0 1 .5.02Zm8.28.93c-.33 0-.75.14-1.17.6a.5.5 0 1 1-.74-.66 2.57 2.57 0 0 1 1.9-.94c.64 0 1.2.28 1.57.7a1.5 1.5 0 0 1-.32 2.3c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 1 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35ZM2 8.91v5.59c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-2.86a2.51 2.51 0 0 1 .35 1h2.51c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.91a1.5 1.5 0 0 1-1 0ZM5.5 13a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm9-4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.26.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    FILLED : "M4.88 3.6c.38-.44.76-.58 1.05-.6.3-.01.58.1.78.3.2.19.3.43.28.63-.01.2-.12.44-.49.65a5.8 5.8 0 0 0-2.2 1.93 2.25 2.25 0 0 0-.3.92v.12a.5.5 0 0 0 .5.45h3a.5.5 0 0 0 0-1H5.18C5.4 6.64 5.9 6.1 7 5.45c.62-.36.95-.88.99-1.45a1.84 1.84 0 0 0-.59-1.43c-.38-.36-.92-.6-1.52-.57-.61.04-1.22.34-1.76.95a.5.5 0 1 0 .76.65ZM2.76 2.07c.15.1.24.26.24.43v5a.5.5 0 0 1-1 0V3.3l-.78.4a.5.5 0 0 1-.45-.9l1.5-.75a.5.5 0 0 1 .5.02Zm8.28.93c-.33 0-.75.14-1.17.6a.5.5 0 1 1-.74-.66 2.57 2.57 0 0 1 1.9-.94c.64 0 1.2.28 1.57.7a1.5 1.5 0 0 1-.32 2.3c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 1 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35ZM2 14.5V8.91a1.5 1.5 0 0 0 1.5-.3c.27.25.62.4 1 .4h3c.59 0 1.1-.35 1.34-.84.66.55 1.42.83 2.2.83.92 0 1.77-.4 2.32-1.05A2.5 2.5 0 0 0 13.64 5h2.86c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5ZM5.5 13a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm8.25-4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-7.5 2.5a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm3.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25-.75a.75.75 0 1 0 1.51 0 .75.75 0 0 0-1.5 0Z"
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