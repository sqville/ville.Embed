/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandPoint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a1 1 0 0 0-1 1v6.5a.5.5 0 0 1-.73.44L6.22 9.87a2.53 2.53 0 0 0-3.16.67c4.35 1.9 6.16 3.7 7.02 5.28.42.78 1.15 1.27 1.88 1.16l2.87-.4a1.5 1.5 0 0 0 1.25-1.11l.82-3.25a3 3 0 0 0-2.46-3.7l-3.01-.46a.5.5 0 0 1-.43-.5V4a1 1 0 0 0-1-1ZM8 4a2 2 0 1 1 4 0v3.14l2.58.38a4 4 0 0 1 3.3 4.94l-.83 3.25a2.5 2.5 0 0 1-2.08 1.87l-2.87.4c-1.29.17-2.36-.68-2.9-1.69-.72-1.3-2.34-3.02-6.67-4.9a.88.88 0 0 1-.37-1.31 3.53 3.53 0 0 1 4.53-1.1l1.31.7V4Z",
    FILLED : "M10 2a2 2 0 0 0-2 2v5.67l-1.31-.69a3.53 3.53 0 0 0-4.53 1.1.88.88 0 0 0 .37 1.32c4.33 1.87 5.95 3.58 6.67 4.9.54 1 1.61 1.85 2.9 1.67l2.87-.4a2.5 2.5 0 0 0 2.08-1.86l.82-3.25a4 4 0 0 0-3.29-4.94L12 7.14V4a2 2 0 0 0-2-2Z"
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