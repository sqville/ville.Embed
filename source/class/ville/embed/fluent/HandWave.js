/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandWave",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.85 1.14a.5.5 0 0 0-.7 0 .5.5 0 0 0 0 .72 6.57 6.57 0 0 1 1.86 5.56.5.5 0 0 0 .42.58.5.5 0 0 0 .56-.42 7.6 7.6 0 0 0-2.14-6.44ZM4.63 3.04a1.6 1.6 0 0 1 3.04-.63 1.6 1.6 0 0 1 2.59.7l.08.27a1.6 1.6 0 0 1 2.55.73l1.07 3.23.58 1.7a8.5 8.5 0 0 1 .38 3.9l-.27 2a2.5 2.5 0 0 1-1.51 1.96l-2.16.9c-.97.4-2.07.15-2.8-.55-3.12-2.99-5.88-3.97-6.65-4.2-.35-.11-.66-.52-.47-.98.15-.35.51-.97 1.28-1.32.6-.26 1.36-.33 2.35-.06L2.77 5.1a1.61 1.61 0 0 1 1.02-2.03c.28-.09.57-.1.84-.04Zm2.15 3.64.55 1.68a.5.5 0 1 1-.95.31l-.57-1.72-.95-2.52a.6.6 0 0 0-.76-.4.61.61 0 0 0-.38.76l2.25 6.55a.5.5 0 0 1-.67.62c-1.33-.57-2.11-.49-2.55-.3-.3.14-.5.34-.62.53a18.9 18.9 0 0 1 6.74 4.33c.47.46 1.15.6 1.72.36l2.16-.9c.5-.2.84-.66.9-1.18l.28-1.99a7.5 7.5 0 0 0-.34-3.44l-.58-1.7v-.01l-1.07-3.24a.6.6 0 0 0-1.16.3l.85 2.62a.5.5 0 0 1-.95.31L9.85 5.1a1.63 1.63 0 0 1-.04-.13l-.5-1.56a.6.6 0 0 0-1.15.38l.6 1.85a.5.5 0 0 1 .03.11l.53 1.6a.5.5 0 1 1-.95.3L6.79 2.92a.6.6 0 0 0-1.13.38l1.1 3.33.02.06Zm7.46-3.61a.5.5 0 0 1 .69.17l.3.5c.5.83.76 1.78.77 2.75a.5.5 0 1 1-1 .01c0-.79-.22-1.57-.63-2.25l-.3-.5a.5.5 0 0 1 .17-.68Z",
    FILLED : "M15.85 1.15a.5.5 0 0 0-.7 0 .5.5 0 0 0 0 .71 6.57 6.57 0 0 1 1.86 5.57.5.5 0 0 0 .42.57.5.5 0 0 0 .56-.42 7.6 7.6 0 0 0-2.14-6.43Zm-10.4.35a.75.75 0 0 0-1.4.5l2.1 5.93a.53.53 0 1 1-1 .36L3.45 3.5a.75.75 0 0 0-1.41.5l2.55 7.18c-2.12-.57-2.85.58-3.07 1.1-.06.12.02.25.15.3.82.24 3.67 1.26 6.85 4.3.6.59 1.49.79 2.26.47l2.16-.9a2 2 0 0 0 1.21-1.58l.27-2.01a8 8 0 0 0-.34-3.63L13 6h-.01l-1.15-3.49a.75.75 0 0 0-1.42.49l.96 2.93a.63.63 0 0 1-1.2.42L8.68 2a.75.75 0 1 0-1.42.5l1.5 4.34a.66.66 0 1 1-1.24.45L5.45 1.5Zm8.79 1.57a.5.5 0 0 1 .69.18l.3.5c.49.83.76 1.78.77 2.75a.5.5 0 1 1-1 0c-.01-.79-.23-1.56-.64-2.25l-.3-.49a.5.5 0 0 1 .18-.69Z"
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