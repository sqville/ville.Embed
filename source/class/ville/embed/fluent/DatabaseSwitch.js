/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseSwitch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.44 17.56c-.2-.2-.32-.46-.38-.73-.6-.1-1.18-.27-1.74-.52C5.36 15.87 5 15.37 5 15V6.7c.28.2.58.38.9.52 1.3.54 2.7.8 4.1.78 1.4.03 2.8-.24 4.1-.78.32-.14.62-.31.9-.52v6.4c.32-.13.68-.13 1 0V5c0-1-.88-1.76-1.9-2.22-1.3-.54-2.7-.8-4.1-.78-1.4-.03-2.8.24-4.1.78C4.87 3.24 4 3.99 4 5v10c0 1 .88 1.75 1.9 2.22.93.4 1.91.64 2.92.72l-.38-.38ZM6.32 3.7A9.2 9.2 0 0 1 10 3a9.2 9.2 0 0 1 3.68.69C14.64 4.12 15 4.63 15 5c0 .37-.36.87-1.32 1.31A9.2 9.2 0 0 1 10 7a9.2 9.2 0 0 1-3.68-.69C5.36 5.87 5 5.37 5 5c0-.37.36-.88 1.32-1.31Zm5.53 15.16a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L10.71 16h5.58l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 0 .7l-2 2a.5.5 0 1 1-.7-.7L16.29 17h-5.58l1.14 1.15a.5.5 0 0 1 0 .7Z",
    FILLED : "M11.85 18.85a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .81.16.5.5 0 0 1-.1.54L10.7 16h5.58l-1.14-1.15a.5.5 0 0 1 .16-.81.5.5 0 0 1 .54.1l2 2a.5.5 0 0 1 0 .71l-2 2a.5.5 0 0 1-.81-.16.5.5 0 0 1 .1-.54L16.3 17h-5.58l1.14 1.15a.5.5 0 0 1 0 .7ZM10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm-1.56 9.56a1.5 1.5 0 0 1 0-2.12l2-2a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 .35 1.56h1.18A1.5 1.5 0 0 1 16 13.1V7.11a4.93 4.93 0 0 1-1.31.9c-.33.16-.66.3-1.01.42-1.19.38-2.43.57-3.68.56-1.25.01-2.5-.18-3.68-.57a8.15 8.15 0 0 1-1.7-.81 4.93 4.93 0 0 1-.62-.5V15c0 1.45 2.07 2.66 4.81 2.93l-.37-.37Z"
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