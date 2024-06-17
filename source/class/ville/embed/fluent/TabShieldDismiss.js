/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabShieldDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.73c-.34-.2-.67-.46-1-.8V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h5.32a5.75 5.75 0 0 0 .71 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm15.6 4.17c-1.22 0-2.32-.51-3.32-1.55a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.75c.08 2.55 1.4 4.29 3.87 5.15.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4v-2.57a.4.4 0 0 0-.4-.34Zm-4.96 1.44L15 12.47l1.35-1.36a.38.38 0 0 1 .54.54L15.53 13l1.36 1.35a.38.38 0 0 1-.54.54L15 13.53l-1.35 1.36a.38.38 0 0 1-.54-.54L14.47 13l-1.36-1.36a.38.38 0 0 1 .53-.53Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.73c-.34-.2-.67-.46-1-.8a1.4 1.4 0 0 0-.5-.34V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5.07a5.8 5.8 0 0 0 .96 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm12.28 2.62c1 1.04 2.1 1.55 3.32 1.55.2 0 .36.14.4.34v2.57c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 0 1-.26 0c-2.48-.86-3.79-2.6-3.87-5.15v-2.75a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0ZM15 12.47l-1.36-1.36a.38.38 0 0 0-.53.53L14.47 13l-1.36 1.35a.38.38 0 0 0 .54.54L15 13.53l1.35 1.36a.38.38 0 0 0 .54-.54L15.53 13l1.36-1.36a.38.38 0 0 0-.54-.53L15 12.47Z"
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