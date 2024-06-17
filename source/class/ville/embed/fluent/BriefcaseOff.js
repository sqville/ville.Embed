/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BriefcaseOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 5.2 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L15.2 15.9c-.23.07-.46.1-.7.1h-9A2.5 2.5 0 0 1 3 13.5v-6c0-1.03.62-1.9 1.5-2.3Zm9.8 9.8-3.33-3.32a.5.5 0 0 1-.47.32h-1a.5.5 0 0 1-.5-.5V11H5.5c-.56 0-1.08-.19-1.5-.5v3c0 .83.67 1.5 1.5 1.5h8.8ZM9 9.7 5.3 6.02c-.73.1-1.3.73-1.3 1.49v1c0 .83.67 1.5 1.5 1.5H9v-.3Zm5.5.3h-2.38l1 1h1.38c.56 0 1.08-.19 1.5-.5v3c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-6A2.5 2.5 0 0 0 14.5 5H13V3.75C13 2.78 12.22 2 11.25 2h-2.5C7.78 2 7 2.78 7 3.75v1.13L8.12 6h6.38c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5ZM8 3.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V5H8V3.75Z",
    FILLED : "M4.5 5.2A2.5 2.5 0 0 0 3 7.5v1c0 .83.67 1.5 1.5 1.5H9v-.3l1.97 1.98a.5.5 0 0 1-.47.32h-1a.5.5 0 0 1-.5-.5V11H4.5c-.56 0-1.08-.19-1.5-.5v3A2.5 2.5 0 0 0 5.5 16h9c.24 0 .47-.03.7-.1l1.95 1.95a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4.5 5.21Zm8.62 5.8 3.62 3.62c.17-.34.26-.72.26-1.12v-3c-.42.31-.94.5-1.5.5h-2.38ZM7 4.88 12.12 10h3.38c.83 0 1.5-.67 1.5-1.5v-1A2.5 2.5 0 0 0 14.5 5H13V3.75C13 2.78 12.22 2 11.25 2h-2.5C7.78 2 7 2.78 7 3.75v1.13ZM8 5V3.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V5H8Z"
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