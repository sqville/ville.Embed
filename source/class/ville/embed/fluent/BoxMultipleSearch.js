/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxMultipleSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22a4.48 4.48 0 0 0-.98-2.44V5.11a.5.5 0 0 0-.32-.47l-3.46-1.33a2 2 0 0 0-1.44 0L8.32 4.64a.5.5 0 0 0-.32.47v1.1a4 4 0 0 0-1 0V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm1.18 6.7a1.5 1.5 0 0 0-.56-.37L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75c-.27-.23-.5-.5-.71-.8l-1.6.62a2 2 0 0 1-1.43 0l-3.46-1.33a.5.5 0 0 1-.32-.47V10.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 0 1 1.44 0l3.16 1.22c.38-.2.79-.35 1.22-.44Zm-1.9.9a.5.5 0 0 0-.25.03L7.5 11.14 4.55 10a.5.5 0 1 0-.35.93L7 12.02v2.49a.5.5 0 0 0 1 0V12l1.5-.57c.29-.57.7-1.07 1.2-1.46ZM15.45 5a.5.5 0 1 1 .35.93L13.04 7a1.5 1.5 0 0 1-1.08 0L9.2 5.94A.5.5 0 0 1 9.55 5l2.77 1.06a.5.5 0 0 0 .36 0l2.77-1.06Zm.85 10.59a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    FILLED : "M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22A4.5 4.5 0 0 0 13.74 9a2.5 2.5 0 0 0-1.34-1.23L8.94 6.44A4 4 0 0 0 7 6.21V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.44a.5.5 0 0 0-.64-.29L12.68 5.6a.5.5 0 0 1-.36 0L9.55 4.53a.5.5 0 0 0-.35.94l2.76 1.06c.35.13.73.13 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM12.6 9.09a1.5 1.5 0 0 0-.56-.38L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75a4.49 4.49 0 0 1-1.02-5.43l-1.5.58v2.49a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10a.5.5 0 0 1 .25-.03c.54-.44 1.2-.75 1.9-.9Zm3.7 6.5a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
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