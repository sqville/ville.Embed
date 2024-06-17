/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WifiSettings",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.96 8.18a9.61 9.61 0 0 0-15.85 0 .5.5 0 0 0 .83.56 8.61 8.61 0 0 1 14.2 0 .5.5 0 1 0 .82-.56Zm-10.78 3.1a4.03 4.03 0 0 1 3.85-1.05c-.32.26-.6.55-.86.88a3.02 3.02 0 0 0-2.91 1.82.5.5 0 1 1-.92-.4c.2-.47.49-.9.84-1.24Zm7.42-2.5.2.23a5.59 5.59 0 0 0-1.35.09 5.45 5.45 0 0 0-8.28 1.79.5.5 0 0 1-.89-.46A6.45 6.45 0 0 1 14.6 8.78Zm-2.53 2.66a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    FILLED : "M17.84 8.12a9.47 9.47 0 0 0-15.6 0 .75.75 0 1 0 1.23.85 7.97 7.97 0 0 1 13.14 0 .75.75 0 1 0 1.23-.85ZM7.11 11.05a4.13 4.13 0 0 1 4.18-1.02c-.5.36-.94.8-1.3 1.31a2.62 2.62 0 0 0-2.36 1.58.75.75 0 1 1-1.38-.6c.21-.47.5-.9.86-1.27Zm7.48-2.39.33.36a5.58 5.58 0 0 0-1.97.2 4.94 4.94 0 0 0-7.32 1.76.75.75 0 1 1-1.34-.68 6.44 6.44 0 0 1 10.3-1.64Zm-2.52 2.78a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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