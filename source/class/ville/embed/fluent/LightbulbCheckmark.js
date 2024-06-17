/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LightbulbCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L13.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Zm-1.84 7.33a8.2 8.2 0 0 1-1.21 1.41.6.6 0 0 0-.15.22l-.02.08-.94 3.92a1.84 1.84 0 0 1-1.67 1.38l-1.9.01c-.81 0-1.53-.52-1.77-1.26l-.04-.14-.93-3.91a.6.6 0 0 0-.17-.3A6.32 6.32 0 0 1 4 8.04L4 7.8v-.2A5.91 5.91 0 0 1 10.25 2a5.5 5.5 0 0 0-.66 1.02 4.9 4.9 0 0 0-4.57 4.4l-.02.2V8c.06 1.3.68 2.52 1.9 3.67.18.17.32.4.4.64l.05.15.37 1.54h4.57l.38-1.61.05-.16c.09-.21.22-.4.39-.56.25-.24.47-.48.67-.72.4.06.82.06 1.23.03ZM7.96 15l.31 1.33.03.1c.1.3.38.52.71.56l.12.01h1.81a.86.86 0 0 0 .75-.53l.03-.1.32-1.37H7.96Z",
    FILLED : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L13.5 6.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7ZM14.5 11c.17 0 .34 0 .5-.02a8.2 8.2 0 0 1-1.2 1.41.6.6 0 0 0-.15.22l-.03.08-.3 1.31H6.68l-.31-1.31a.6.6 0 0 0-.18-.3A6.32 6.32 0 0 1 4 8.04V7.6A5.91 5.91 0 0 1 10.25 2a5.5 5.5 0 0 0 4.25 9Zm-1.43 4-.38 1.6a1.84 1.84 0 0 1-1.67 1.4h-1.9c-.81 0-1.53-.52-1.77-1.26l-.04-.14-.38-1.6h6.14Z"
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