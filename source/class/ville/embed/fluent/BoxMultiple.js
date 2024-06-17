/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.71A1.5 1.5 0 0 0 7 5.11v1.1a4 4 0 0 1 1 0v-1.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47v7.78c0 .2-.13.4-.32.47L14 14.39v.5c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.11a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm2.51 2.92a.5.5 0 0 0-.64-.3l-2.77 1.07a.5.5 0 0 1-.36 0L9.55 5.01a.5.5 0 1 0-.35.93l2.76 1.07c.35.13.73.13 1.08 0l2.76-1.07a.5.5 0 0 0 .3-.64Zm-5 5a.5.5 0 0 0-.64-.3L7.5 11.15l-2.95-1.13a.5.5 0 0 0-.35.93L7 12.02v2.49a.5.5 0 1 0 1 0v-2.49l2.8-1.08a.5.5 0 0 0 .3-.64ZM8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.71a1.5 1.5 0 0 0-.96 1.4v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l3.46-1.33c.58-.22.96-.78.96-1.4v-4.78a1.5 1.5 0 0 0-.96-1.4L8.58 7.38Zm-1.8.93a2 2 0 0 1 1.44 0l3.46 1.33c.2.08.32.26.32.47v4.78c0 .2-.13.4-.32.47l-3.46 1.33a2 2 0 0 1-1.44 0l-3.46-1.33a.5.5 0 0 1-.32-.47v-4.78c0-.2.13-.4.32-.47l3.46-1.33Z",
    FILLED : "M13.58 2.38a3 3 0 0 0-2.16 0L7.96 3.7A1.5 1.5 0 0 0 7 5.1v1.1a4 4 0 0 1 1.94.23l3.46 1.34A2.5 2.5 0 0 1 14 10.1v4.78c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.1a1.5 1.5 0 0 0-.96-1.4l-3.46-1.33Zm1.87 2.15a.5.5 0 1 1 .35.94l-2.76 1.06a1.5 1.5 0 0 1-1.08 0L9.2 5.47a.5.5 0 0 1 .35-.94l2.77 1.07a.5.5 0 0 0 .36 0l2.77-1.07ZM6.42 7.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v4.78a1.5 1.5 0 0 1-.96 1.4l-3.46 1.33a3 3 0 0 1-2.16 0l-3.46-1.33a1.5 1.5 0 0 1-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.91a.5.5 0 0 0-.64-.28L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l2.8-1.07a.5.5 0 0 0 .3-.65Z"
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