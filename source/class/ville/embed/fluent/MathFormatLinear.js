/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MathFormatLinear",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.36 3.65a.5.5 0 0 0-.71 0l-1.5 1.5a.5.5 0 0 0 .7.7L9 4.72l1.15 1.15a.5.5 0 1 0 .7-.71l-1.5-1.5ZM7.74 7.78a1.79 1.79 0 0 0-1.27-.75 3.26 3.26 0 0 0-1.74.24c-1.24.52-2.45 1.78-3.06 4.06a3.7 3.7 0 0 0 .14 2.6c.35.72.96 1.2 1.67 1.42 1.42.45 3.21-.12 4.42-1.73a.5.5 0 0 0-.8-.6c-1 1.33-2.37 1.68-3.32 1.38a1.74 1.74 0 0 1-1.07-.9 2.48 2.48 0 0 1-.16-1.51c2.16.12 3.64-.47 4.51-1.32.9-.87 1.18-2.1.68-2.89ZM6.36 9.95c-.6.59-1.71 1.1-3.55 1.05.58-1.64 1.5-2.47 2.3-2.8.46-.2.88-.23 1.2-.18.34.05.52.19.58.29.16.26.17.96-.53 1.64Zm11.5-2.8c.19.2.19.5 0 .7l-3.09 3.08 1.64 2.76c.07.1.25.25.47.3.17.03.42.02.74-.35a.5.5 0 1 1 .76.66c-.53.6-1.15.78-1.7.67-.51-.1-.9-.44-1.1-.72-.12-.18-.8-1.34-1.54-2.59l-3.19 3.2a.5.5 0 0 1-.7-.71l3.37-3.38a981.7 981.7 0 0 1-1.46-2.5.59.59 0 0 0-.41-.27c-.15-.01-.42.02-.75.47a.5.5 0 0 1-.8-.59c.49-.67 1.08-.94 1.66-.87.54.06.96.4 1.16.75l1.33 2.28 2.9-2.9c.2-.19.5-.19.7 0Z",
    FILLED : "M9.01 3.18c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 1 1-.98 1.14L9.5 4.74 8.24 5.82a.75.75 0 0 1-.98-1.14l1.75-1.5Zm2.3 5.7c.36-.4.54-.38.56-.38.05 0 .15.05.26.2l1.32 2.05-3.21 2.98a.75.75 0 1 0 1.02 1.1l3-2.8 1.36 2.1v.02a1.92 1.92 0 0 0 3.27.01.75.75 0 1 0-1.28-.77.42.42 0 0 1-.51.14.59.59 0 0 1-.22-.21L15.38 11l2.88-2.67a.75.75 0 0 0-1.02-1.1L14.56 9.7l-1.18-1.84A1.93 1.93 0 0 0 12.02 7c-.67-.07-1.3.27-1.84.9a.75.75 0 1 0 1.14.98ZM7.68 7.86a2.11 2.11 0 0 0-1.52-.83c-.6-.07-1.26.03-1.92.3-1.33.56-2.6 1.86-3.12 4.08-.23.97-.1 1.84.35 2.54A3.32 3.32 0 0 0 3.3 15.3a4.5 4.5 0 0 0 4.47-1.09.75.75 0 1 0-1.07-1.04 3 3 0 0 1-2.95.7c-.47-.15-.82-.4-1.02-.73a1.5 1.5 0 0 1-.23-.7c2.13.26 3.63-.3 4.54-1.22.5-.52.8-1.12.91-1.7.1-.57.04-1.2-.28-1.67Zm-1.7 2.31c-.49.5-1.46.99-3.17.8a3.77 3.77 0 0 1 2-2.26c.45-.18.86-.23 1.17-.19.32.04.44.16.46.18.04.06.1.25.05.55-.06.29-.21.62-.5.92Z"
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