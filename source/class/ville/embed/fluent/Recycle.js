/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Recycle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.32 2.92a1.5 1.5 0 0 0-2.64 0L6.83 6.37a.5.5 0 1 1-.88-.47L7.8 2.45a2.5 2.5 0 0 1 4.4 0l2.01 3.74.3-1.77a.5.5 0 0 1 .98.16l-.5 3a.5.5 0 0 1-.65.4l-3-1a.5.5 0 0 1 .32-.95l1.62.54-1.96-3.65Zm4.03 6.4a.5.5 0 0 0-.22.7l2.03 3.77c.54 1-.19 2.21-1.32 2.21H11.7l1.14-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 17h4.13a2.5 2.5 0 0 0 2.2-3.68l-2.03-3.78a.5.5 0 0 0-.66-.21ZM4.16 16H7.5a.5.5 0 0 1 0 1H4.16a2.5 2.5 0 0 1-2.2-3.68l2.15-4-1.95.65a.5.5 0 1 1-.32-.94l3-1a.5.5 0 0 1 .63.31l1 3a.5.5 0 0 1-.94.32l-.6-1.77-2.09 3.9A1.5 1.5 0 0 0 4.16 16Z",
    FILLED : "M8.9 3.04a1.25 1.25 0 0 1 2.2 0l1.66 3.1-1.02-.35a.75.75 0 0 0-.48 1.42l3 1a.75.75 0 0 0 .98-.59l.5-3a.75.75 0 1 0-1.48-.24l-.17 1.04-1.67-3.1a2.75 2.75 0 0 0-4.84 0L5.84 5.57a.75.75 0 0 0 1.33.7L8.9 3.05Zm8.04 10.87-1.91-3.56a.75.75 0 1 1 1.32-.71l1.91 3.56a2.75 2.75 0 0 1-2.42 4.05H12.3l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72h3.53c.94 0 1.55-1 1.1-1.84Zm-9.69 1.84a.75.75 0 0 1 0 1.5H4.16a2.75 2.75 0 0 1-2.42-4.05L3.6 9.76l-1.35.45a.75.75 0 1 1-.48-1.42l3-1a.75.75 0 0 1 .95.47l1 3a.75.75 0 1 1-1.42.48l-.4-1.22-1.83 3.39c-.44.83.16 1.84 1.1 1.84h3.09Z"
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