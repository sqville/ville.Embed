/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonRunning",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.33.62A2.5 2.5 0 1 0 11 4.5H8A2.5 2.5 0 0 0 5.5 7v1.75c0 .69.4 1.28.97 1.57L5.8 11H2.75a1.75 1.75 0 1 0 0 3.5h2.94c.63 0 1.25-.2 1.76-.59l1-.75L10 14.71v1.54a1.75 1.75 0 1 0 3.5 0V13a.5.5 0 0 0-.15-.35L11.71 11l.79-.8.1.1c.44.45 1.05.7 1.68.7h2.97a1.75 1.75 0 1 0 0-3.5h-1.54l-.88-.88Zm-1.05.36 1.37 1.37c.09.1.22.15.35.15h1.75a.75.75 0 0 1 0 1.5h-2.97c-.37 0-.72-.15-.98-.4l-.45-.45a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 0 0 0 .7l1.85 1.86v3.04a.75.75 0 0 1-1.5 0V14.5a.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.65-.05l-1.35 1.01c-.33.25-.74.39-1.16.39H2.75a.75.75 0 0 1 0-1.5H6a.5.5 0 0 0 .35-.15l1.44-1.44C8.5 10.2 9 9.53 9 8.75V8h1a.5.5 0 0 0 0-1H8.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7c0-.83.67-1.5 1.5-1.5h3.2a2.5 2.5 0 0 0 2.58 1.48Z",
    FILLED : "M11.5 4.5a2 2 0 1 1 2.61 1.9l1.6 1.6h1.79a1.5 1.5 0 0 1 0 3h-3.22c-.63 0-1.24-.25-1.68-.7l-.1-.1-1.04 1.05 1.4 1.4c.09.09.14.22.14.35v3.5a1.5 1.5 0 0 1-3 0v-1.8l-1.55-1.54-1 .75c-.5.38-1.13.59-1.76.59H2.5a1.5 1.5 0 0 1 0-3h4.25c1.24 0 2.25-1 2.25-2.25V8h1a.5.5 0 0 0 0-1H8.5a.5.5 0 0 0-.5.5v1.75a1.25 1.25 0 1 1-2.5 0V7A2.5 2.5 0 0 1 8 4.5h3.5Z"
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