/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiHint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.44 2.15a.5.5 0 0 0 .2.98 7.2 7.2 0 0 1 2.73 0 .5.5 0 0 0 .19-.98 8.2 8.2 0 0 0-3.12 0Zm6 1.2a.5.5 0 0 0-.55.83 7.04 7.04 0 0 1 1.93 1.93.5.5 0 1 0 .83-.56 8.04 8.04 0 0 0-2.2-2.2Zm-8.33.83a.5.5 0 0 0-.56-.83 8.04 8.04 0 0 0-2.2 2.2.5.5 0 0 0 .83.56A7.04 7.04 0 0 1 6.1 4.18ZM3.13 8.63a.5.5 0 1 0-.98-.2 8.2 8.2 0 0 0 0 3.13.5.5 0 0 0 .98-.2 7.2 7.2 0 0 1 0-2.73Zm14.72-.2a.5.5 0 1 0-.98.2 7.2 7.2 0 0 1 0 2.74.5.5 0 1 0 .98.2 8.2 8.2 0 0 0 0-3.13ZM4.18 13.9a.5.5 0 0 0-.83.56 8.04 8.04 0 0 0 2.2 2.2.5.5 0 0 0 .56-.83 7.04 7.04 0 0 1-1.93-1.93Zm12.47.56a.5.5 0 1 0-.83-.56 7.04 7.04 0 0 1-1.93 1.93.5.5 0 1 0 .55.83 8.04 8.04 0 0 0 2.21-2.2Zm-8.02 2.42a.5.5 0 0 0-.2.98c1.02.2 2.12.2 3.13 0a.5.5 0 0 0-.2-.98c-.88.17-1.84.17-2.73 0ZM7.75 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-5.69 3.11a.5.5 0 0 1 .7.08 3.5 3.5 0 0 0 5.47 0 .5.5 0 0 1 .78.62 4.5 4.5 0 0 1-7.02 0 .5.5 0 0 1 .07-.7Z",
    FILLED : "M8.44 2.15a.5.5 0 0 0 .2.98 7.2 7.2 0 0 1 2.73 0 .5.5 0 0 0 .19-.98 8.2 8.2 0 0 0-3.12 0Zm6 1.2a.5.5 0 0 0-.55.83 7.04 7.04 0 0 1 1.93 1.93.5.5 0 1 0 .83-.56 8.04 8.04 0 0 0-2.2-2.2Zm-8.33.83a.5.5 0 0 0-.56-.83 8.04 8.04 0 0 0-2.2 2.2.5.5 0 0 0 .83.56A7.04 7.04 0 0 1 6.1 4.18ZM3.13 8.63a.5.5 0 1 0-.98-.2 8.2 8.2 0 0 0 0 3.13.5.5 0 0 0 .98-.2 7.2 7.2 0 0 1 0-2.73Zm14.72-.2a.5.5 0 1 0-.98.2 7.2 7.2 0 0 1 0 2.74.5.5 0 1 0 .98.2 8.2 8.2 0 0 0 0-3.13ZM4.18 13.9a.5.5 0 0 0-.83.56 8.04 8.04 0 0 0 2.2 2.2.5.5 0 0 0 .56-.83 7.04 7.04 0 0 1-1.93-1.93Zm12.47.56a.5.5 0 1 0-.83-.56 7.04 7.04 0 0 1-1.93 1.93.5.5 0 1 0 .55.83 8.04 8.04 0 0 0 2.21-2.2Zm-8.02 2.42a.5.5 0 0 0-.2.98c1.02.2 2.12.2 3.13 0a.5.5 0 0 0-.2-.98c-.88.17-1.84.17-2.73 0ZM16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-9.44 2.11a.5.5 0 0 0-.07.7 4.5 4.5 0 0 0 7.02 0 .5.5 0 1 0-.78-.62 3.5 3.5 0 0 1-5.46 0 .5.5 0 0 0-.7-.08ZM7.75 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13 8.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
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