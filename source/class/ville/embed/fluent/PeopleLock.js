/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleLock",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm7.5 8.72C10.23 15.3 8.93 16 6.75 16c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2V12.08a1.43 1.43 0 0 1-.01.18v.02A2 2 0 0 0 11 14v.47Zm-8.5-2.4v.1l.06.32c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15s3.26-.8 3.74-1.5a2.95 2.95 0 0 0 .5-1.42l.01-.02V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.06ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm1.5 5.5v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   var pathdfilled = "M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm1 8.7c-.74.83-2.02 1.55-4.25 1.55-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10a2 2 0 0 1 2 2l-.02.28A2 2 0 0 0 11 14v.45ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-1 3v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});