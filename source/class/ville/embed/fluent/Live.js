/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Live",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.35 4.33a.48.48 0 0 1 .68.01c.2.2.19.54-.02.75a6.98 6.98 0 0 0 .15 9.97c.22.2.23.55.03.75a.48.48 0 0 1-.67.02 7.98 7.98 0 0 1-.17-11.5ZM15 5.1a.53.53 0 0 1-.02-.75c.19-.18.5-.2.68 0a7.98 7.98 0 0 1-.17 11.5.48.48 0 0 1-.67-.03.53.53 0 0 1 .03-.75 6.98 6.98 0 0 0 .15-9.97Zm-8.86 1a.46.46 0 0 1 .66.02c.2.2.19.55-.02.76a4.49 4.49 0 0 0 .14 6.4c.22.21.25.57.04.78a.46.46 0 0 1-.64.03 5.49 5.49 0 0 1-.18-7.99Zm7.1.78c-.2-.21-.23-.56-.02-.76.18-.19.48-.2.66-.02a5.48 5.48 0 0 1-.18 7.99.46.46 0 0 1-.64-.03c-.21-.21-.18-.57.04-.78a4.49 4.49 0 0 0 .14-6.4ZM10 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    FILLED : "M5.45 4.17a.73.73 0 0 0-1.02-.01 8.23 8.23 0 0 0 .17 11.86c.3.27.74.24 1.01-.03a.78.78 0 0 0-.02-1.11 6.73 6.73 0 0 1-.15-9.62c.3-.3.32-.78.01-1.1Zm1.76 1.76a.71.71 0 0 0-1-.02 5.73 5.73 0 0 0 .18 8.35c.3.27.73.23.99-.03.32-.33.26-.85-.04-1.14a4.24 4.24 0 0 1-.14-6.05c.29-.3.33-.8.01-1.11Zm5.58 0a.71.71 0 0 1 1-.02 5.73 5.73 0 0 1-.18 8.35.71.71 0 0 1-.99-.03c-.32-.33-.26-.85.04-1.14a4.24 4.24 0 0 0 .14-6.05c-.29-.3-.33-.8-.01-1.11Zm1.76-1.76a.73.73 0 0 1 1.02-.01 8.23 8.23 0 0 1-.17 11.86.73.73 0 0 1-1.01-.03.78.78 0 0 1 .02-1.11 6.73 6.73 0 0 0 .15-9.62.78.78 0 0 1-.01-1.1ZM10 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
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