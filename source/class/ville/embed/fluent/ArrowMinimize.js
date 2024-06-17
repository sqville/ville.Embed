/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowMinimize",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 11h5a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-1 .09V12.7l-5.15 5.15a.5.5 0 0 1-.76-.63l.06-.07L7.29 12H3.5a.5.5 0 0 1-.5-.41v-.09a.5.5 0 0 1 .41-.5H8.5h-5Zm14.35-8.85c.18.17.2.44.06.63l-.06.07L12.71 8h3.79a.5.5 0 0 1 .5.41v.09a.5.5 0 0 1-.41.5h-5.18l-.1-.04-.08-.04-.05-.04-.03-.03-.04-.04-.04-.06-.03-.06-.02-.06V8.6a.5.5 0 0 1-.02-.1v.07V3.5a.5.5 0 0 1 1-.09V7.3l5.15-5.15c.2-.2.5-.2.7 0Z",
    FILLED : "M3.75 11h4.5c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 0 1-1.5.1v-2.79l-4.47 4.47a.75.75 0 0 1-1.13-.98l.07-.08 4.47-4.47H3.75a.75.75 0 0 1-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h4.5-4.5Zm14.28-9.03c.27.27.3.68.07.98l-.07.08L13.06 8h3.19c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-5a.75.75 0 0 1-.74-.65l-.01-.1v-5a.75.75 0 0 1 1.5-.1v3.29l4.97-4.97c.3-.3.77-.3 1.06 0Z"
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