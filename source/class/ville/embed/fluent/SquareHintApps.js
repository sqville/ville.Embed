/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareHintApps",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4.05 5.54a2 2 0 0 1 1.55-1.5.5.5 0 0 0 .4-.59.5.5 0 0 0-.66-.38 3 3 0 0 0-2.29 2.34.5.5 0 0 0 .4.6.5.5 0 0 0 .6-.47Zm0 8.92a2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.66.38 3 3 0 0 1-2.29-2.34.5.5 0 0 1 .4-.6.5.5 0 0 1 .6.47ZM14.66 3.07a.5.5 0 0 0-.66.38.5.5 0 0 0 .46.6 2 2 0 0 1 1.5 1.55.5.5 0 0 0 .59.4.5.5 0 0 0 .38-.66 3 3 0 0 0-2.27-2.27ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm16-1.75C19 8.78 18.22 8 17.25 8h-2.5C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75ZM14 13V9.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4Zm2.5 5H14v-4h4v2.5c0 .83-.67 1.5-1.5 1.5Zm-6.75-4H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z",
    FILLED : "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4.05 5.54a2 2 0 0 1 1.55-1.5.5.5 0 0 0 .4-.59.5.5 0 0 0-.66-.38 3 3 0 0 0-2.29 2.34.5.5 0 0 0 .4.6.5.5 0 0 0 .6-.47Zm0 8.92a2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.66.38 3 3 0 0 1-2.29-2.34.5.5 0 0 1 .4-.6.5.5 0 0 1 .6.47ZM14.66 3.07a.5.5 0 0 0-.66.38.5.5 0 0 0 .46.6 2 2 0 0 1 1.5 1.55.5.5 0 0 0 .59.4.5.5 0 0 0 .38-.66 3 3 0 0 0-2.27-2.27ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3ZM6.5 5C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5H7v-.25A2.75 2.75 0 0 1 9.75 12H12V9.75A2.75 2.75 0 0 1 14.75 7H15v-.5c0-.83-.67-1.5-1.5-1.5h-7ZM19 9.75C19 8.78 18.22 8 17.25 8h-2.5C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 0 0 2.5-2.5V9.75ZM14 13V9.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4Zm2.5 5H14v-4h4v2.5c0 .83-.67 1.5-1.5 1.5Zm-6.75-4H13v4H9.75a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75Z"
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