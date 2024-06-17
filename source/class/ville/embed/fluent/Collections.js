/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Collections",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.5 7A2.5 2.5 0 0 1 18 9.33v6.17a2.5 2.5 0 0 1-2.33 2.5H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm0 1h-6c-.78 0-1.42.6-1.5 1.35v6.15c0 .78.6 1.42 1.36 1.5h6.14c.78 0 1.42-.6 1.5-1.36V9.5c0-.78-.6-1.42-1.35-1.5h-.15Zm-3 1a.5.5 0 0 1 .5.4V12h2.5a.5.5 0 0 1 .1 1H13v2.5a.5.5 0 0 1-1 .09v-2.6H9.5a.5.5 0 0 1-.09-.98l.1-.01H12V9.5c0-.28.22-.5.5-.5Zm.16-5.3.05.15L13.3 6h-1.04l-.5-1.89a1.5 1.5 0 0 0-1.7-1.1l-.14.04L4.1 4.6a1.5 1.5 0 0 0-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 0 0 1.4 1.1v1a2.5 2.5 0 0 1-2.3-1.68l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15Z",
    FILLED : "M15.5 7A2.5 2.5 0 0 1 18 9.33v6.17a2.5 2.5 0 0 1-2.33 2.5H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm-3 2a.5.5 0 0 0-.5.4V12H9.41a.5.5 0 0 0 0 1H12v2.59a.5.5 0 0 0 1 0v-2.6h2.6a.5.5 0 0 0 0-.98l-.1-.01H13V9.4a.5.5 0 0 0-.5-.4Zm.16-5.3.05.15L13.3 6H9a3 3 0 0 0-3 2.82V14.35a2.5 2.5 0 0 1-2.3-1.69l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15Z"
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